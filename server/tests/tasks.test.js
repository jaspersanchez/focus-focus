import 'dotenv/config';
import request from 'supertest';
import app from '../src/app.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_TEST);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
});

describe('POST /api/tasks', () => {
  it('should create a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Buy groceries', description: 'milk, eggs' });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Buy groceries');
  });
});

describe('GET /api/tasks', () => {
  it('should return all task', async () => {
    const res = await request(app).get('/api/tasks');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

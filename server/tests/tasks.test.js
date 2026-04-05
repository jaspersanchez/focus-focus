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

describe('PATCH /api/tasks/:id/complete', () => {
  it('should toggle isCompleted', async () => {
    // create task first
    const created = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test task', description: 'test' });

    const taskId = created.body._id;

    const res = await request(app).patch(`/api/tasks/${taskId}/complete`).send({
      isCompleted: !created.isCompleted,
    });

    expect(res.status).toBe(200);
    expect(res.body.isCompleted).toBe(true);
  });
});

describe('PATCH /api/tasks/:id', () => {
  it('should update title and description', async () => {
    const created = await request(app)
      .post('/api/tasks')
      .send({ title: 'original title', description: 'original description' });

    const taskId = created.body._id;

    const res = await request(app)
      .patch(`/api/tasks/${taskId}`)
      .send({ title: 'updated title', description: 'updated description' });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('updated title');
    expect(res.body.description).toBe('updated description');
  });
});

describe('DELETE /api/tasks/:id', () => {
  it('should delete the task', async () => {
    const created = await request(app)
      .post('/api/tasks')
      .send({ title: 'original title', description: 'original description' });

    const taskId = created.body._id;

    const res = await request(app).delete(`/api/tasks/${taskId}`);

    expect(res.status).toBe(204);
  });
});

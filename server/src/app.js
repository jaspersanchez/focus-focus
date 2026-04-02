import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

// routes
app.use('/api/tasks', taskRoutes);

export default app;

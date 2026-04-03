import { Router } from 'express';
import { Task } from '../model/Task.js';

const router = Router();

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

router.patch('/:id/complete', async (req, res) => {
  const updated = await Task.findByIdAndUpdate(
    req.params.id,
    { $set: { isCompleted: req.body.isCompleted } },
    { returnDocument: 'after' }
  );

  res.json(updated);
});

export default router;

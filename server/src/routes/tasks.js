import { Router } from 'express';
import { Task } from '../model/Task.js';

const router = Router();

router.post('/', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

export default router;

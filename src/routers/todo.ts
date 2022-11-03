import express, { Request, Response } from 'express';

import { AppError } from '../middlewares/errors';
import { fullNameConcat } from '../util/Utils';

export const router = express.Router();
export const pathName = '/todo';

router.get(pathName, (req, res) => {
  res.json({ message: 'todo' });
});

router.post(pathName, (req, res) => {
  res.json({ message: 'todo' });
});

router.put('/todo/:id', (req, res) => {
  res.json({ message: 'todo' });
});

router.get('/todo/:id', (req: Request, res: Response) => {
  res.json({ message: 'Welcome' });
});

interface ITodo {
  message: string;
  name: string;
}

router.post('/', (req: Request, res: Response) => {
  const todo: ITodo = req.body;
  res.json(todo.message);
});

router.post('/full-name', (req: Request, res: Response) => {
  const body = req.body;
  if (body.firstName !== 'Anderson') {
    throw new AppError({
      customMessage: 'Name not registered',
      status: 401,
    });
  }
  res.json({ name: fullNameConcat(body.firstName, body.lastName) });
});

export default router;

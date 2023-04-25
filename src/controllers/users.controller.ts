import { Request, Response } from 'express';
import usersService from '../services/users.service';
import Users from '../interfaces/users.interface';

async function addUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const user: Users = {
    username,
    vocation,
    level,
    password,
  };

  const token = await usersService.addUser(user);

  res.status(201).json({ token });
}

export default {
  addUser,
};

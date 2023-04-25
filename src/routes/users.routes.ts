import { Router } from 'express';
import usersController from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.post('/', usersController.addUser);

export default usersRouter;
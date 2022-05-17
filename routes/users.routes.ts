import { Router } from 'express';
import UsersController from '../src/controllers/users.controllers';
import validateBody from '../src/middlewares/users.middleware';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/users/', validateBody, usersController.create);

export default usersRoutes;
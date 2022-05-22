import { Router } from 'express';
import OrdersController from '../src/controllers/orders.controllers';

const ordersRoutes = Router();
const ordersController = new OrdersController();

ordersRoutes.get('/orders', ordersController.getAll);

export default ordersRoutes;
import { Router } from 'express';
import ProductsController from '../src/controllers/products.controllers';
import validateBody from '../src/middlewares/products.middleware';

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get('/products', productsController.getAll);
productsRoutes.post('/products', validateBody, productsController.create);

export default productsRoutes;
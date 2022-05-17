import { Router } from 'express';
import ProductsController from '../src/controllers/products.controllers';

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get('/products', productsController.getAll);

export default productsRoutes;
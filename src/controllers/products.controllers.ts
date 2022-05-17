import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductsController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };
}
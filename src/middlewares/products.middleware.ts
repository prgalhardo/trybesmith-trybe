import { Request, Response, NextFunction } from 'express';
import { Product } from '../../interfaces/products.interfaces';

function validateName(name: string) {
  if (!name) return ({ status: 400, message: '"name" is required' });

  if (typeof name !== 'string') return ({ status: 422, message: '"name" must be a string' });

  if (name.length < 3) {
    return ({ status: 422, message: '"name" length must be at least 3 characters long' });
  } 
}

function validateAmount(amount: string) {
  if (!amount) return ({ status: 400, message: '"amount" is required' });

  if (typeof amount !== 'string') return ({ status: 422, message: '"amount" must be a string' });

  if (amount.length < 3) {
    return ({ status: 422, message: '"amount" length must be at least 3 characters long' });
  }
}

function validateBody(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body as Product;
  let error = validateName(name);
  if (error) return res.status(error.status).json({ message: error.message });

  error = validateAmount(amount);
  if (error) return res.status(error.status).json({ message: error.message });

  next();
}

export default validateBody;
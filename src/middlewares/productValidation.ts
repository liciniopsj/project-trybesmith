import { NextFunction, Request, Response } from 'express';
import productSchema from './schemas/productSchema';

const productValidationRequest = ({ name, amount }:{ name: string, amount: string }) => {
  const { error } = productSchema.validate({ name, amount });

  if (error) return { message: error.message };

  return { message: '' };
};

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const validation = productValidationRequest({ name, amount });

  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (!amount) return res.status(400).json({ message: '"amount" is required' });
  if (validation.message) return res.status(422).json(validation);

  next();
};

export default validateProduct;

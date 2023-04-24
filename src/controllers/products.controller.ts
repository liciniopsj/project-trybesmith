import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function getAll(req: Request, res: Response) {
  const products = await productsService.getAll();
  res.json(products);
}

export default {
  getAll,
};
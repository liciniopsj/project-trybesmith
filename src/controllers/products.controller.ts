import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function getAll(req: Request, res: Response) {
  const products = await productsService.getAll();
  res.json(products);
}

async function addProduct(req: Request, res: Response) {
  const addedProduct = await productsService.addProduct(req.body);
  res.status(201).json(addedProduct);
}

export default {
  getAll,
  addProduct,
};
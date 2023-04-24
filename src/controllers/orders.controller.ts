import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

async function getAll(_req: Request, res:Response) {
  const orders = await ordersService.getAll();
  res.json(orders);
}

export default {
  getAll,
};
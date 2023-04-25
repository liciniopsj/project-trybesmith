import { Router } from 'express';
import productsController from '../controllers/products.controller';
import validateProduct from '../middlewares/productValidation';

const productsRouter = Router();

productsRouter.get('/', productsController.getAll);
productsRouter.post('/', validateProduct, productsController.addProduct);

export default productsRouter;

import Product from '../interfaces/products.interface';
import productsModel from '../models/products.model';

function getAll() {
  return productsModel.getAll();
}

function addProduct(product:Product) {
  return productsModel.addProduct(product);
}

export default {
  getAll,
  addProduct,
};
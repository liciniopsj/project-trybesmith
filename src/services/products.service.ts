import productsModel from '../models/products.model';

function getAll() {
  return productsModel.getAll();
}

export default {
  getAll,
};
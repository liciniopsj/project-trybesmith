import ordersModel from '../models/orders.model';

function getAll() {
  return ordersModel.getAll();
}

export default {
  getAll,
};

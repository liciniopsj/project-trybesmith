import connection from './connection';
import Product from '../interfaces/products.interface';

async function getAll(): Promise<Product[]> {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.products');
  return rows as Product[];
}

export default {
  getAll,
};

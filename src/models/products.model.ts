import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import Product from '../interfaces/products.interface';

async function getAll(): Promise<Product[]> {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return rows as Product[];
}

async function addProduct({ name, amount }: Product): Promise<Product> {
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
    [name, amount],
  );
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, name, amount } as Product;
}

export default {
  getAll,
  addProduct,
};

import connection from './connection';
import Orders from '../interfaces/orders.interface';

const QUERY = `
SELECT
o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
FROM
Trybesmith.orders AS o
    INNER JOIN
Trybesmith.products AS p ON o.id = p.order_id
GROUP BY o.id;`;

async function getAll(): Promise<Orders[]> {
  const [rows] = await connection.execute(QUERY);
  return rows as Orders[];
}

export default {
  getAll,
};

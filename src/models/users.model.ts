import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Users from '../interfaces/users.interface';
import connection from './connection';

async function getByUsername(username: string): Promise<Users> {
  const [[rows]] = await connection.execute<RowDataPacket[]>(
    'SELECT username, password FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return rows as Users;
}

async function addUser({ username, vocation, level, password }:Users): Promise<Users> {
  const result = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
    [username, vocation, level, password],
  );

  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, username, vocation, level, password } as Users;
}

export default {
  getByUsername,
  addUser,
};

import Users from '../interfaces/users.interface';
import auth from '../middlewares/auth';
import usersModel from '../models/users.model';

async function addUser(user:Users): Promise<string> {
  await usersModel.addUser(user);
  // console.log(result);
  const { username } = user;
  const token = auth.signIn(username);
  return token;
}

export default {
  addUser,
};

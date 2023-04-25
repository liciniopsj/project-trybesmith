import usersModel from '../models/users.model';
import auth from '../middlewares/auth';

async function loginService(username: string, password: string) {
  const userInfo = await usersModel.getByUsername(username);
  
  if (!userInfo || password !== userInfo.password) {
    return { status: 400, message: 'Invalid fields' };
  }

  const token = auth.signIn(username);
  
  return { status: 200, token };
}

export default {
  loginService,
};

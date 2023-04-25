import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const SECRET_KEY: Secret = process.env.JWT_SECRET || 'xablau';

const signIn = (userName: string) => {
  const payload: JwtPayload = { userName };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '30m', algorithm: 'HS256' });
  // console.log(token);
  return token;
};

const validateToken = (token: string) => jwt.verify(token, SECRET_KEY);

export default {
  signIn,
  validateToken,
};

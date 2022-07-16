import { sign, verify, SignOptions } from 'jsonwebtoken';
import 'dotenv/config';
import IUser from '../interfaces/IUser';
import HttpException from './httpexception';
import { StatusCode } from './statusResponseEnum';

const { TOKEN_SECRET } = process.env;

const jwtConfig: SignOptions = {
  expiresIn: '6h',
  algorithm: 'HS256',
};

const generateToken = (user: Omit<IUser, 'password'>) => {
  const token = sign({ user }, TOKEN_SECRET, jwtConfig);

  return { token };
};

export default {
  generateToken,
};

export const authToken = async (
  token: string | undefined,
) => {
  try {
    const validate = verify(token, TOKEN_SECRET);

    return validate;
  } catch (error: any) {
    throw new HttpException(StatusCode.UNAUTHORIZED, 'Invalid token');
  }
};

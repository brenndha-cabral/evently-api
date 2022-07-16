import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/httpexception';

import { authToken } from '../utils/jwt';
import { StatusCode } from '../utils/statusResponseEnum';

const validateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization;

  if (!token) {
    throw new HttpException(StatusCode.UNAUTHORIZED, 'Token not found');
  }

  const userToken = await authToken(token);

  res.locals.user = userToken;

  next();
};

export default validateToken;

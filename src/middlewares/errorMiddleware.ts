import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/httpexception';
import { StatusCode, StatusResponse } from '../utils/statusResponseEnum';

const errorMiddleware = async (error: any, req: Request, res: Response, _next: NextFunction) => {
  if (error instanceof HttpException) {
    res.status(error.status).json({ message: error.message });
  }
  res.status(StatusCode.INTERNAL_SERVER_ERROR)
    .json({ message: StatusResponse.INTERNAL_SERVER_ERROR });
};

export default errorMiddleware;

import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { StatusCode } from '../utils/statusResponseEnum';

export const validateFieldsLogin = [
  check('email')
    .exists()
    .withMessage('"email" is required'),
  check('password')
    .exists()
    .withMessage('"password" is required')
    .isLength({ min: 6 })
    .withMessage('"password" length must be at least 8 characters long'),
];

export const validateRules = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
  } else {
    const errorMessage = errors.array()[0].msg;

    if (errorMessage.includes('required')) {
      return res.status(StatusCode.BAD_REQUEST).json({ message: errorMessage });
    }
    return res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ message: errorMessage });
  }
};

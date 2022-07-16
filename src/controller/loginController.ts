import { Request, Response } from 'express';
import JWT from '../utils/jwt';
import usersService from '../service/usersService';
import { StatusCode } from '../utils/statusResponseEnum';

const loginAuthenticate = async (req: Request, res: Response): Promise<Response> => {
  const userLogin = req.body;

  const user = await usersService.getUserLogin(userLogin.email);

  if (!user) {
    return res.status(StatusCode.UNAUTHORIZED).json({ message: 'name or password invalid' });
  }
  const token = JWT.generateToken({
    id: user.id, name: user.name, email: user.email,
  });

  return res.status(StatusCode.OK).json(token);
};

export default {
  loginAuthenticate,
};

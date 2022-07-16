import express from 'express';
import loginController from '../controller/loginController';
import { validateFieldsLogin, validateRules } from '../middlewares/validateRules';

const router = express.Router();

router.post('/', validateFieldsLogin, validateRules, loginController.loginAuthenticate);

export default router;

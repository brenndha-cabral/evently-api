import express from 'express';

import loginRoute from './loginRoute';

const router = express.Router();

router.use('/login', loginRoute);

export default router;

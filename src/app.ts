import 'express-async-errors';
import 'dotenv/config';
import express from 'express';

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use('/');

app.use('insert error middleware');

app.listen(PORT, () => console.log('Listening at', PORT));

import 'express-async-errors';
import 'dotenv/config';
import express, { json } from 'express';
import db from './database/config/config';
import errorMiddleware from './middlewares/errorMiddleware';
import routes from './routes';

const { PORT } = process.env;

const app = express();

app.use(json());

app.use('/', routes);

app.use(errorMiddleware);

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Connection was successfully established, listening at ${PORT}`);
  });
}).catch((error) => console.log('Unable to connect to the database: \n', error));

import { Sequelize, Dialect } from 'sequelize';
import 'dotenv/config';

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
const dbHost = process.env.DATABASE_HOST;
const dbDriver = process.env.DATABASE_DIALECT as Dialect;
const dbPassword = process.env.DATABASE_PASSWORD;

const db = new Sequelize(
  dbName,
  dbUser,
  dbPassword,
  {
    dialect: dbDriver,
    host: dbHost,
  },
);

export default db;

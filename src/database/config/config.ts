import { Sequelize, Dialect } from 'sequelize';
import 'dotenv/config';

const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;
const dialect = process.env.DATABASE_DIALECT as Dialect;

const db = new Sequelize(
  database,
  username,
  password,
  {
    dialect,
    host,
  },
);

export = db;

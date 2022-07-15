"use strict";
const sequelize_1 = require("sequelize");
require("dotenv/config");
const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const host = process.env.DATABASE_HOST;
const dialect = process.env.DATABASE_DIALECT;
const db = new sequelize_1.Sequelize(database, username, password, {
    dialect,
    host,
});
module.exports = db;

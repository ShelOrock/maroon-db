import dotenv from "dotenv";

import { Dialect, Sequelize } from "sequelize";

dotenv.config();

const connection: Sequelize = new Sequelize(
  process.env.DATASTORE_NAME,
  process.env.DATASTORE_USERNAME,
  process.env.DATASTORE_PASSWORD, {
    host: process.env.DATASTORE_HOST,
    dialect: process.env.DATASTORE_DIALECT as Dialect,
    logging: false
  }
);

export default connection;

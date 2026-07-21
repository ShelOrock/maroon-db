import dotenv from "dotenv";

import { Dialect, Sequelize } from "sequelize";

dotenv.config();

const getRequiredEnv = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${ name }`);
  };

  return value;
};

const createConnection = (): Sequelize => {
  const databaseName = getRequiredEnv("DATASTORE_NAME");
  const username = getRequiredEnv("DATASTORE_USERNAME");
  const password = getRequiredEnv("DATASTORE_PASSWORD");
  const host = getRequiredEnv("DATASTORE_HOST");
  const dialect = getRequiredEnv("DATASTORE_DIALECT") as Dialect;

  return new Sequelize(databaseName, username, password, {
    host,
    dialect,
    logging: false
  });
};

const connection = createConnection();

export default connection;

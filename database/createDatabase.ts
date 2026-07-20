import pg from "pg";

import chalk from "chalk";

const verifyAndCreateDatabase = async () => {
  const client = new pg.Client({
    host: process.env.DATASTORE_HOST,
    user: process.env.DATASTORE_USER,
    password: process.env.DATASTORE_PASSWORD,
    database: process.env.DATASTORE_DIALECT
  });

  try {
    console.log(chalk.yellowBright("Verifying database existence..."));
    const DATABASE_NAME = process.env.DATASTORE_NAME;

    const SELECT_DATABASE_QUERY = `SELECT 1 FROM pg_database WHERE datname = $1`;
    const CREATE_DATABASE_COMMAND = `CREATE DATABASE "${ DATABASE_NAME }"`;

    await client.connect();
    const result = await client.query(SELECT_DATABASE_QUERY, [ DATABASE_NAME ]);

    if(result.rows.length === 0) {
      console.log(chalk.yellowBright("No database found. Creating new database..."));
      await client.query(CREATE_DATABASE_COMMAND);
      console.log(chalk.greenBright("Database created successfully!\n"));
    };

    console.log(chalk.blueBright("Database exists!\n"));

  } catch(error) {
    console.log(chalk.redBright("Error querying and creating database", error));

  } finally {
    client.end();
  };
};

export default verifyAndCreateDatabase;

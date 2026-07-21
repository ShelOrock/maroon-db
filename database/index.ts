import chalk from "chalk";
import connection from "./connection.js"
import verifyAndCreateDatabase from "./createDatabase.js";
import { createModels } from "./Models/index.js";
import seedDatabase from "./seed/seedDatabase.js";

const initializeDatabase = async () => {
  try {
    console.log(chalk.yellowBright.bold.inverse("Initializing database...\n"))
    await verifyAndCreateDatabase();

    console.log(chalk.yellowBright("Creating database models..."));
    const models = createModels(connection);
    console.log(chalk.greenBright("Database models successfully created!\n"));
    
    console.log(chalk.yellowBright("Syncing database..."));
    await connection.sync({ force: true });
    console.log(chalk.greenBright("Database successfully synced!\n"));
        
    console.log(chalk.yellowBright.bold("Seeding database..."));
    await seedDatabase(models);
    console.log(chalk.greenBright("Database successfully seeded!\n"));

    console.log(chalk.greenBright.bold.inverse("Database initialization complete!"));
    process.exit(0);

  } catch(error) {
    console.log(chalk.redBright.bold("Error initializing database", error));
    process.exit(1);
  };
};

initializeDatabase();

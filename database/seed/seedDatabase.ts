import chalk from "chalk";
import { seedFriendships, seedPacks, seedPosts, seedUsers } from "./seeds/index.js";
import { AppModelTypes } from "../types.js";

const seedDatabase = async (models: AppModelTypes) => {
  try {
    console.log(chalk.yellow("Seeding users..."));
    const users = await seedUsers(models);

    console.log(chalk.yellow("Seeding friendships..."));
    await seedFriendships(models, users);

    console.log(chalk.yellow("Seeding packs..."));
    const packs = await seedPacks(models, users);

    console.log(chalk.yellow("Seeding posts..."));
    await seedPosts(models, packs);

  } catch(error) {
    console.log(chalk.redBright("Error creating a new seed", error));
    process.exit(1);
  };
};

export default seedDatabase;

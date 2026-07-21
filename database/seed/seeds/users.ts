import { CreationAttributes } from "sequelize";

import { generateUsers } from "../generators/index.js";

import { AppModelTypes } from "../../types.js";
import { UserTypes } from "../../Models/types.js";

const seedUsers = async ({ User }: AppModelTypes): Promise<UserTypes[]> => {
  try {
    const users: CreationAttributes<UserTypes>[] = generateUsers(100);

    return await User.bulkCreate(users);

  } catch(error) {
    console.log("Error creating users", error);
    process.exit(1);
  };
}

export default seedUsers;

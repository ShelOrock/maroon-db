import { CreationAttributes } from "sequelize";

import { generatePacks } from "../generators/index.js"

import { AppModelTypes } from "../../types.js";
import { UserTypes, PackTypes } from "../../Models/types.js";

const seedPacks = async ({ Pack }: AppModelTypes, users: UserTypes[]): Promise<PackTypes[]> => {
  try {
    const packs: CreationAttributes<PackTypes>[] = generatePacks(users);

    return await Pack.bulkCreate(packs);

  } catch(error) {
    console.log("Error creating packs", error);
    process.exit(1);
  };
};

export default seedPacks;

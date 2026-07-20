import { generatePacks } from "../generators/index.js"

import { AppModelTypes } from "../../types.js";
import { UserTypes } from "../../Models/User/types.js";
import { PackTypes } from "../../Models/Pack/types.js";

const seedPacks = async ({ Pack }: AppModelTypes, users: UserTypes[]): Promise<PackTypes[]> => {
  try {
    const packs = generatePacks(users);

    return await Pack.bulkCreate(packs);

  } catch(error) {
    console.log("Error creating packs", error);
    process.exit(1);
  };
};

export default seedPacks;

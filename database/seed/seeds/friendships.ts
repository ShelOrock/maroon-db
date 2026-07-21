import { CreationAttributes } from "sequelize";

import { generateFriendships } from "../generators/index.js"

import { AppModelTypes } from "../../types.js";
import { UserTypes, FriendshipTypes } from "../../Models/types.js"

const seedFriendships = async ({ Friendship }: AppModelTypes, users: UserTypes[]): Promise<void> => {
  try {
    const friendships: CreationAttributes<FriendshipTypes>[] = generateFriendships(users);

    await Friendship.bulkCreate(friendships);

  } catch(error) {
    console.log("Error creating friendships", error);
    process.exit(1);
  };
};

export default seedFriendships;

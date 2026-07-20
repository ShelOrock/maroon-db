import { generateFriendships } from "../generators/index.js"

import { AppModelTypes } from "../../types.js";
import { UserTypes } from "../../Models/User/types.js"

const seedFriendships = async ({ Friendship }: AppModelTypes, users: UserTypes[]): Promise<void> => {
  try {
    const friendships = generateFriendships(users);

    await Friendship.bulkCreate(friendships);

  } catch(error) {
    console.log("Error creating friendships", error);
    process.exit(1);
  };
};

export default seedFriendships;

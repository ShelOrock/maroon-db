import { CreationAttributes } from "sequelize";

import { generatePosts } from "../generators/index.js"

import { AppModelTypes } from "../../types.js";
import { PackTypes, PostTypes } from "../../Models/types.js";

const seedPosts = async ({ Post }: AppModelTypes, packs: PackTypes[]): Promise<PostTypes[]> => {
  try {
    const posts: CreationAttributes<PostTypes>[] = generatePosts(packs);

    return await Post.bulkCreate(posts);

  } catch(error) {
    console.log("Error creating posts", error);
    process.exit(1);
  };
};

export default seedPosts;

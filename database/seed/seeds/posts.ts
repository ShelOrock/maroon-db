import { generatePosts } from "../generators/index.js"

import { AppModelTypes } from "../../types.js";
import { PackTypes } from "../../Models/Pack/types.js";

const seedPosts = async ({ Post }: AppModelTypes, packs: PackTypes[]): Promise<void> => {
  try {
    const posts = generatePosts(packs);

    await Post.bulkCreate(posts);

  } catch(error) {
    console.log("Error creating posts", error);
    process.exit(1);
  };
};

export default seedPosts;

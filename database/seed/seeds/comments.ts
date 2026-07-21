import { CreationAttributes } from "sequelize";

import { generateComments } from "../generators/index.js";

import { AppModelTypes } from "../../types.js";
import { CommentTypes, PostTypes } from "../../Models/types.js";

const seedPosts = async ({ Comment }: AppModelTypes, posts: PostTypes[]): Promise<void> => {
  try {
    const comments: CreationAttributes<CommentTypes>[] = generateComments(posts);

    await Comment.bulkCreate(comments);

  } catch(error) {
    console.log("Error creating comments", error);
    process.exit(1);
  };
};

export default seedPosts;

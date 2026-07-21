import { CreationAttributes } from "sequelize";
import { CommentTypes, PostTypes } from "../../Models/types.js";
import { faker } from "@faker-js/faker";

const generateComments = (posts: PostTypes[]): CreationAttributes<CommentTypes>[] => {
  const comments: CreationAttributes<CommentTypes>[] = [];

  posts.forEach(post => {
    if(post.status === "published") {
      const commentCount = Math.floor(post.likes / 1000);

      for(let i = 0; i < commentCount; i++) {
        comments.push({
          comment: faker.lorem.sentences({ min: 1, max: 5}),
          postId: post.id
        });
      }
    };
  });

  return comments;
};

export default generateComments;

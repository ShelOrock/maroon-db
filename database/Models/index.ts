import { Sequelize } from "sequelize";

import * as UserModel from "./User/index.js";
import * as FriendshipModel from "./Friendship/index.js";
import * as PostModel from "./Post/index.js";
import * as PackModel from "./Pack/index.js";
import * as CommentModel from "./Comment/index.js";

import { AppModelTypes } from "../types.js";

const createModels = (connection: Sequelize): AppModelTypes => {
  const User = UserModel.defineUserModel(connection);
  const Friendship = FriendshipModel.defineFriendshipModel(connection);
  const Post = PostModel.definePostModel(connection);
  const Pack = PackModel.definePackModel(connection);
  const Comment = CommentModel.defineCommentModel(connection);

  UserModel.registerUserScopes(User);
  FriendshipModel.registerFriendshipScopes(Friendship);
  PostModel.registerPostScopes(Post);
  PackModel.registerPackScopes(Pack);
  CommentModel.registerCommentScopes(Comment);

  const Models = {
    User,
    Friendship,
    Post,
    Pack,
    Comment
  };

  UserModel.registerUserAssociates(Models);
  FriendshipModel.registerFriendshipAssociations(Models);
  PostModel.registerPostAssociations(Models);
  PackModel.registerPackAssociations(Models);
  CommentModel.registerCommentAssociations(Models);

  return Models;
};

export {
  createModels,
  UserModel,
  FriendshipModel,
  PostModel,
  PackModel,
  CommentModel
};

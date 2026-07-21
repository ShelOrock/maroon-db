import { Model, ModelStatic, Sequelize } from "sequelize";

import { AppModelTypes } from "../types.js";

import { UserTypes } from "./User/types.js";
import { FriendshipTypes } from "./Friendship/types.js";
import { PostTypes } from "./Post/types.js";
import { PackTypes } from "./Pack/types.js";
import { CommentTypes } from "./Comment/types.js";

type DefineModelType<ModelType extends Model> = (connection: Sequelize) => ModelStatic<ModelType>;

type RegisterModelScopesType<ModelTypes extends Model> = (model: ModelStatic<ModelTypes>) => void;

type RegisterModelAssociationsType = (model: AppModelTypes) => void;

export {
  DefineModelType,
  RegisterModelScopesType,
  RegisterModelAssociationsType,
  UserTypes,
  FriendshipTypes,
  PostTypes,
  PackTypes,
  CommentTypes
};

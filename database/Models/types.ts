import { Model, ModelStatic, Sequelize } from "sequelize";

import { AppModelTypes } from "../types.js";

type DefineModelType<ModelType extends Model> = (connection: Sequelize) => ModelStatic<ModelType>;

type RegisterModelScopesType<ModelTypes extends Model> = (model: ModelStatic<ModelTypes>) => void;

type RegisterModelAssociationsType = (model: AppModelTypes) => void;

export {
  DefineModelType,
  RegisterModelScopesType,
  RegisterModelAssociationsType
};

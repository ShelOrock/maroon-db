import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model
} from "sequelize";

type RoleTypes = 
  | "guest"
  | "standard"
  | "admin";

interface UserAttributeTypes {
  id: string;
  username: CreationOptional<string>;
  email: CreationOptional<string>;
  password: CreationOptional<string>;
  role: RoleTypes;
}

interface UserTypes extends Model<InferAttributes<UserTypes>, InferCreationAttributes<UserTypes>>, UserAttributeTypes {};

export {
  RoleTypes,
  UserAttributeTypes,
  UserTypes
};

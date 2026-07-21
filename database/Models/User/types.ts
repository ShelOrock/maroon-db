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
  id: CreationOptional<string>;
  username: string;
  email: string;
  password: string;
  role: RoleTypes;
}

interface UserTypes extends Model<InferAttributes<UserTypes>, InferCreationAttributes<UserTypes>>, UserAttributeTypes {};

export {
  RoleTypes,
  UserAttributeTypes,
  UserTypes
};

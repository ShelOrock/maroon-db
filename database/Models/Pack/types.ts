import {
  InferAttributes,
  InferCreationAttributes,
  Model
} from "sequelize";

type StatusTypes = 
  | "drafted"
  | "published"
  | "hidden"

interface PackAttributeTypes {
  id: string;
  ownerId: string;
  views: number;
  status: StatusTypes;
};

interface PackTypes extends Model<InferAttributes<PackTypes>, InferCreationAttributes<PackTypes>>, PackAttributeTypes {};

export {
  StatusTypes,
  PackAttributeTypes,
  PackTypes
};

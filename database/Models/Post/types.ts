import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model 
} from "sequelize";

type StatusTypes =
 | "drafted"
 | "published"

interface PostAttributeTypes {
  id: CreationOptional<string>;
  ownerId: string;
  packId: string | null;
  image: string;
  caption: string;
  likes: number;
  status: StatusTypes;
};

interface PostTypes extends Model<InferAttributes<PostTypes>, InferCreationAttributes<PostTypes>>, PostAttributeTypes {};

export {
  PostAttributeTypes,
  PostTypes
};

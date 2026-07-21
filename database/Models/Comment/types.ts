import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model
} from "sequelize";

interface CommentAttributeTypes {
  id: CreationOptional<string>;
  comment: string;
  postId: string;
};

interface CommentTypes extends Model<InferAttributes<CommentTypes>, InferCreationAttributes<CommentTypes>>, CommentAttributeTypes {};

export {
  CommentAttributeTypes,
  CommentTypes
};

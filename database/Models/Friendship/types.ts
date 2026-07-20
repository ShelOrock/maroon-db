import {
  InferAttributes,
  InferCreationAttributes,
  Model
} from "sequelize";

type StatusTypes = 
  | "pending"
  | "accepted"
  | "blocked"

interface FriendshipAttributeTypes {
  id: string;
  requesterId: string;
  receiverId: string;
  status: StatusTypes;
};

interface FriendshipTypes extends Model<InferAttributes<FriendshipTypes>, InferCreationAttributes<FriendshipTypes>>, FriendshipAttributeTypes {};

export {
  FriendshipAttributeTypes,
  FriendshipTypes
};

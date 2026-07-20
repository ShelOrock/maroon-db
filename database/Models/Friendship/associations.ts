import { RegisterModelAssociationsType } from "../types.js";

const registerFriendshipAssociations: RegisterModelAssociationsType = ({
  Friendship,
  User
}) => {
  Friendship.belongsTo(User, {
    foreignKey: "requesterId",
    as: "requester"
  });

  Friendship.belongsTo(User, {
    foreignKey: "receiverId",
    as: "receiver"
  });
};

export default registerFriendshipAssociations;

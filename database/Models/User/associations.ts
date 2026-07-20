import { RegisterModelAssociationsType } from "../types.js";

const registerUserAssociations: RegisterModelAssociationsType = ({
  User,
  Friendship,
  Post,
  Pack,
  Comment,
}) => {
  User.hasMany(Friendship, {
    foreignKey: "requesterId",
    as: "requestedFriendships"
  });

  User.hasMany(Friendship, {
    foreignKey: "receiverId",
    as: "receivedFriendships"
  });

  User.hasMany(Post);
  
  User.hasMany(Comment);

  User.hasMany(Pack);
}

export default registerUserAssociations;

import { RegisterModelScopesType } from "../types.js";
import { FriendshipTypes } from "./types.js";

const registerFriendshipScopes: RegisterModelScopesType<FriendshipTypes> = Friendship => {
  Friendship.addScope("default", {
    attributes: { exclude: [ "status" ] }
  });

  Friendship.addScope("public", {
    attributes: { exclude: [ "status" ] }
  });

  Friendship.addScope("private", {
    attributes: { exclude: [] }
  });
};

export default registerFriendshipScopes;

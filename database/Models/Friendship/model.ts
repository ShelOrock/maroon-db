import { DataTypes } from "sequelize";

import { DefineModelType } from "../types.js";
import { FriendshipTypes } from "./types.js";

const defineFriendshipModel: DefineModelType<FriendshipTypes> = connection => {
  const friendshipModel = connection.define<FriendshipTypes>("friendship", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    requesterId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    receiverId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [ "pending", "accepted", "blocked" ]
    }
  });

  return friendshipModel
};

export default defineFriendshipModel;

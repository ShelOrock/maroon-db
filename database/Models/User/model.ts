import { DataTypes } from "sequelize";

import { DefineModelType } from "../types.js";
import { UserTypes } from "./types.js";

const defineUserModel: DefineModelType<UserTypes> = connection => {
  const userModel = connection.define<UserTypes>("user", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: true
    },

    role: {
      type: DataTypes.STRING,
      values: [ "guest", "standard", "admin" ],
      defaultValue: "guest"
    }
  });

  return userModel;
};

export default defineUserModel;

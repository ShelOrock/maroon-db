import { DataTypes } from "sequelize";
import { DefineModelType } from "../types.js";
import { CommentTypes } from "./types.js";

const defineCommentModel: DefineModelType<CommentTypes> = connection => {
  const commentModel = connection.define<CommentTypes>("comment", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    postId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

  return commentModel;
};

export default defineCommentModel;

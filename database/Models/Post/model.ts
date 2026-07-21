import { DataTypes } from "sequelize";

import { DefineModelType } from "../types.js";
import { PostTypes } from "./types.js";

const definePostModel: DefineModelType<PostTypes> = connection => {
  const postModel = connection.define<PostTypes>("post", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    ownerId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    packId: {
      type: DataTypes.UUID,
      allowNull: true
    }, 
  
    image: {
      type: DataTypes.STRING,
    },
  
    caption: {
      type: DataTypes.TEXT,
      defaultValue: ""
    },
  
    likes: {
      type: DataTypes.INTEGER,
    },

    status: {
      type: DataTypes.STRING,
      values: [ "drafted", "published" ]
    }
  });

  return postModel;
};

export default definePostModel;

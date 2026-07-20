import { ModelStatic } from "sequelize";

import { UserTypes } from "./Models/User/types.js";
import { FriendshipTypes } from "./Models/Friendship/types.js";
import { PostTypes } from "./Models/Post/types.js";
import { PackTypes } from "./Models/Pack/types.js";
import { CommentTypes } from "./Models/Comment/types.js";

interface AppModelTypes {
  User: ModelStatic<UserTypes>;
  Friendship: ModelStatic<FriendshipTypes>;
  Post: ModelStatic<PostTypes>;
  Pack: ModelStatic<PackTypes>;
  Comment: ModelStatic<CommentTypes>;
};

export { AppModelTypes };

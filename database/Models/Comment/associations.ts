import { RegisterModelAssociationsType } from "../types.js";

const registerCommentAssociations: RegisterModelAssociationsType = ({
  Comment,
  User,
  Post
}) => {
  Comment.belongsTo(User);

  Comment.belongsTo(Post);
};

export default registerCommentAssociations;

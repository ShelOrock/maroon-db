import { RegisterModelAssociationsType } from "../types.js";

const registerPostAssociation: RegisterModelAssociationsType = ({
  Post,
  User,
  Pack,
  Comment
}) => {
  Post.belongsTo(User);

  Post.belongsTo(Pack);

  Post.hasMany(Comment);
};

export default registerPostAssociation;

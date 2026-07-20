import { RegisterModelAssociationsType } from "../types.js";

const registerPackAssociations: RegisterModelAssociationsType = ({
  Pack,
  User,
  Post,
}) => {
  Pack.belongsTo(User);

  Pack.hasMany(Post);
};

export default registerPackAssociations;

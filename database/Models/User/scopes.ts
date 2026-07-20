
import { RegisterModelScopesType } from "../types.js";
import { UserTypes } from "./types.js";

const registerUserScopes: RegisterModelScopesType<UserTypes> = User => {
  User.addScope("default", {
    attributes: { exclude: [] }
  });

  User.addScope("public", {
    attributes: { exclude: [ "password" ] }
  });
  
  User.addScope("private", {
    attributes: { exclude: [] }
  });
};

export default registerUserScopes;

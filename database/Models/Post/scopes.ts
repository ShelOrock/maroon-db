import { RegisterModelScopesType } from "../types.js";
import { PostTypes } from "./types.js";

const registerPostScopes: RegisterModelScopesType<PostTypes> = Post => {
  Post.addScope("default", {
    attributes: { exclude: [] }
  });

  Post.addScope("public", {
    attributes: { exclude: [] }
  });
};

export default registerPostScopes;

import { RegisterModelScopesType } from "../types.js";
import { CommentTypes } from "./types.js";

const registerCommentScopes: RegisterModelScopesType<CommentTypes> = Comment => {
  Comment.addScope("default", {
    attributes: { exclude: [] }
  });

  Comment.addScope("public", {
    attributes: { exclude: [] }
  });
};

export default registerCommentScopes;

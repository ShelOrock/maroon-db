import { RegisterModelScopesType } from "../types.js";
import { PackTypes } from "./types.js";

const registerPackScopes: RegisterModelScopesType<PackTypes> = Pack => {
  Pack.addScope("default", {
    attributes: { exclude: [ "openCount" ] }
  });

  Pack.addScope("public", {
    attributes: { exclude: [ "openCount" ] }
  });

  Pack.addScope("private", {
    attributes: { exclude: [] }
  });
};

export default registerPackScopes;

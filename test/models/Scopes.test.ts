import { describe, expect, it } from "vitest";

import { createModels } from "../../database/Models/index.js";
import { createTestConnection } from "../utils/index.js";

describe("model scopes", () => {
  const connection = createTestConnection();
  const models = createModels(connection);

  it("registers the expected scopes for User", () => {
    if(models.User.options.scopes) {
      expect(Object.keys(models.User.options.scopes)).toEqual(["default", "public", "private"]);
    }
  });

  it("registers the expected scopes for Post", () => {
    if(models.Post.options.scopes) {
      expect(Object.keys(models.Post.options.scopes)).toEqual(["default", "public"]);
    };
  });

  it("registers the expected scopes for Comment", () => {
    if(models.Comment.options.scopes) {
      expect(Object.keys(models.Comment.options.scopes)).toEqual(["default", "public"]);
    };
  });

  it("registers the expected scopes for Friendship", () => {
    if(models.Friendship.options.scopes) {
      expect(Object.keys(models.Friendship.options.scopes)).toEqual(["default", "public", "private"]);
    };
  });

  it("registers the expected scopes for Pack", () => {
    if(models.Pack.options.scopes) {
      expect(Object.keys(models.Pack.options.scopes)).toEqual(["default", "public", "private"]);
    };
  });
});

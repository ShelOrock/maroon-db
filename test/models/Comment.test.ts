import { describe, expect, it } from "vitest";

import defineCommentModel from "../../database/Models/Comment/model.js";
import { assertModelCreation } from "../utils/modelTestUtils.js";

describe("defineCommentModel", () => {
  it("creates a valid Sequelize model", () => {
    assertModelCreation(defineCommentModel, {
      name: "comment",
      attributes: ["id", "postId", "comment"],
      tableName: "comments",
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.postId.allowNull).toBe(false);
        expect(attributes.comment.allowNull).toBe(false);
        expect(attributes.comment.type).toBeDefined();
      }
    });
  });

  it("defines the expected comment attribute metadata", () => {
    assertModelCreation(defineCommentModel, {
      name: "comment",
      attributes: ["id", "postId", "comment"],
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.id.primaryKey).toBe(true);
        expect(attributes.postId.type).toBeDefined();
        expect(attributes.comment.type).toBeDefined();
      }
    });
  });
});

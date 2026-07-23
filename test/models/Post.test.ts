import { describe, expect, it } from "vitest";

import definePostModel from "../../database/Models/Post/model.js";
import { assertModelCreation } from "../utils/modelTestUtils.js";

describe("definePostModel", () => {
  it("creates a valid Sequelize model", () => {
    assertModelCreation(definePostModel, {
      name: "post",
      attributes: ["id", "ownerId", "packId", "image", "caption", "likes", "status"],
      tableName: "posts",
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.ownerId.allowNull).toBe(false);
        expect(attributes.packId.allowNull).toBe(true);
        expect(attributes.image.type).toBeDefined();
        expect(attributes.caption.type).toBeDefined();
        expect(attributes.likes.type).toBeDefined();
        expect(attributes.status.values).toEqual(["drafted", "published"]);
      }
    });
  });

  it("defines the expected post attribute metadata", () => {
    assertModelCreation(definePostModel, {
      name: "post",
      attributes: ["id", "ownerId", "packId", "image", "caption", "likes", "status"],
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.id.primaryKey).toBe(true);
        expect(attributes.ownerId.type).toBeDefined();
        expect(attributes.packId.type).toBeDefined();
        expect(attributes.image.type).toBeDefined();
        expect(attributes.caption.type).toBeDefined();
        expect(attributes.likes.type).toBeDefined();
        expect(attributes.status.type).toBeDefined();
      }
    });
  });
});

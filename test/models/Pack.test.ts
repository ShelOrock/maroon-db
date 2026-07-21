import { describe, expect, it } from "vitest";

import definePackModel from "../../database/Models/Pack/model.js";
import { assertModelCreation } from "../utils/modelTestUtils.js";

describe("definePackModel", () => {
  it("creates a valid Sequelize model", () => {
    assertModelCreation(definePackModel, {
      name: "pack",
      attributes: ["id", "ownerId", "views", "status"],
      tableName: "packs",
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.ownerId.allowNull).toBe(false);
        expect(attributes.views.allowNull).toBe(false);
        expect(attributes.views.defaultValue).toBe(0);
        expect(attributes.status.values).toEqual(["drafted", "published", "hidden"]);
      }
    });
  });

  it("defines the expected pack attribute metadata", () => {
    assertModelCreation(definePackModel, {
      name: "pack",
      attributes: ["id", "ownerId", "views", "status"],
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.id.primaryKey).toBe(true);
        expect(attributes.ownerId.type).toBeDefined();
        expect(attributes.views.type).toBeDefined();
        expect(attributes.status.type).toBeDefined();
      }
    });
  });
});

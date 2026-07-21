import { describe, expect, it } from "vitest";

import defineUserModel from "../../database/Models/User/model.js";
import { assertModelCreation } from "../utils/modelTestUtils.js";

describe("defineUserModel", () => {
  it("creates a valid Sequelize model", () => {
    assertModelCreation(defineUserModel, {
      name: "user",
      attributes: ["id", "username", "email", "password", "role"],
      tableName: "users",
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.email.validate?.isEmail).toBe(true);
        expect(attributes.role.defaultValue).toBe("guest");
        expect(attributes.username.allowNull).toBe(false);
        expect(attributes.email.allowNull).toBe(false);
      }
    });
  });

  it("defines the expected user attribute metadata", () => {
    assertModelCreation(defineUserModel, {
      name: "user",
      attributes: ["id", "username", "email", "password", "role"],
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.id.primaryKey).toBe(true);
        expect(attributes.username.type).toBeDefined();
        expect(attributes.email.type).toBeDefined();
        expect(attributes.role.type).toBeDefined();
      }
    });
  });
});

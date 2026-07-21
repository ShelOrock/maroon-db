import { describe, expect, it } from "vitest";

import defineFriendshipModel from "../../database/Models/Friendship/model.js";
import { assertModelCreation } from "../utils/modelTestUtils.js";

describe("defineFriendshipModel", () => {
  it("creates a valid Sequelize model", () => {
    assertModelCreation(defineFriendshipModel, {
      name: "friendship",
      attributes: ["id", "requesterId", "receiverId", "status"],
      tableName: "friendships",
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.requesterId.allowNull).toBe(false);
        expect(attributes.receiverId.allowNull).toBe(false);
        expect(attributes.status.allowNull).toBe(false);
        expect(attributes.status.values).toEqual(["pending", "accepted", "blocked"]);
      }
    });
  });

  it("defines the expected friendship attribute metadata", () => {
    assertModelCreation(defineFriendshipModel, {
      name: "friendship",
      attributes: ["id", "requesterId", "receiverId", "status"],
      assertModelMetadata: model => {
        const attributes = model.getAttributes();

        expect(attributes.id.primaryKey).toBe(true);
        expect(attributes.requesterId.type).toBeDefined();
        expect(attributes.receiverId.type).toBeDefined();
        expect(attributes.status.type).toBeDefined();
      }
    });
  });
});

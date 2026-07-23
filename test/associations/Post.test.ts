import { describe, expect, it } from "vitest";

import { createModels } from "../../database/Models/index.js";
import { createTestConnection } from "../utils/index.js";

describe("Post associations", () => {
  const connection = createTestConnection();
  const models = createModels(connection);

  it("registers the expected associations", () => {
    expect(Object.keys(models.Post.associations)).toEqual(["user", "pack", "comments"]);
  });
});

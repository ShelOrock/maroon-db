import { describe, expect, it } from "vitest";

import { createModels } from "../../database/Models/index.js";
import { createTestConnection } from "../utils/index.js";

describe("Pack associations", () => {
  const connection = createTestConnection();
  const models = createModels(connection);

  it("registers the expected associations", () => {
    expect(Object.keys(models.Pack.associations)).toEqual(["user", "posts"]);
  });
});

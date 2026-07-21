import { expect } from "vitest";
import { Model, ModelStatic, Sequelize } from "sequelize";

import createTestConnection from "./connectionTestUtils.js";

type DefineModelFunctionType<ModelType extends Model> = (connection: Sequelize) => ModelStatic<ModelType>;

type ModelTestSpec<ModelType extends Model> = {
  name: string;
  attributes: string[];
  tableName?: string;
  assertModelMetadata?: (model: ModelStatic<ModelType>) => void;
};

const assertModelCreation = <ModelType extends Model>(
  defineModel: DefineModelFunctionType<ModelType>,
  testModel: ModelTestSpec<ModelType>
): ModelStatic<ModelType> => {
  const connection = createTestConnection();
  const model = defineModel(connection);

  expect(model).toBeDefined();
  expect(model.name).toBe(testModel.name);

  for (const attribute of testModel.attributes) {
    expect(attribute in model.getAttributes()).toBe(true);
  }

  if (testModel.tableName) {
    expect(model.tableName).toBe(testModel.tableName);
  }

  if(testModel.assertModelMetadata) {
    testModel.assertModelMetadata(model);
  }

  return model;
};

export {
  assertModelCreation,
  type DefineModelFunctionType,
  type ModelTestSpec
};

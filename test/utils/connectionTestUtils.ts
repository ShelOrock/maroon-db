import { Sequelize } from "sequelize";

const createTestConnection = (): Sequelize => new Sequelize("test-database-name", "test-username", "test-password", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  define: {
    timestamps: false
  }
});

export default createTestConnection;

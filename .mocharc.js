require("dotenv").config();

process.env.DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost:27017/test";

global.testRuntime = {};

module.exports = {
  ui: "bdd",
  recursive: true,
  "watch-files": ["test/**/*.test.js"],
  exit: true,
};

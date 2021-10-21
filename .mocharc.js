require("dotenv").config();

if (!process.env.TEST_DATABASE_URL) {
  throw new Error("A test database url should be set on this environment");
}

process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;

global.testRuntime = {};

module.exports = {
  ui: "bdd",
  recursive: true,
  "watch-files": ["test/**/*.test.js"],
  exit: true,
};

require("dotenv").config();

const mongoose = require("mongoose");
const ProductMock = require("./products");
const db = require("./../../database");

const openDatabase = () => {
  return mongoose.connect(db.uri, { useNewUrlParser: true });
};

const closeDatabase = () => {
  return mongoose.disconnect();
};

const seed = () => {
  return ProductMock.run(20);
};

const run = async () => {
  await openDatabase();
  await seed();
  await closeDatabase();
};

run();

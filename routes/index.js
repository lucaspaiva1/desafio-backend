const express = require("express");

const routes = express.Router();
const ProductController = require("../src/controllers/products");

routes.get("/", function (req, res) {
  return res.send("API is running");
});

routes.get("/products", ProductController.index);

module.exports = routes;

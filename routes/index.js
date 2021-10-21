const express = require("express");

const routes = express.Router();
const ProductController = require("../src/controllers/products");
const handlePagination = require("../src/middlewares/pagination");

routes.get("/", function (req, res) {
  return res.send("API is running");
});

routes.get("/products", handlePagination, ProductController.index);

module.exports = routes;

const Product = require("../models/products");

class ProductController {
  async index(req, res) {
    const data = await Product.find({});
    return res.json(data);
  }
}

module.exports = new ProductController();

const ProductService = require("../services/products");

module.exports = {
  async index(req, res) {
    const data = await ProductService.index(req.query);
    return res.json(data);
  },
};

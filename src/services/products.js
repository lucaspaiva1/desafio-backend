const Product = require("../models/products");

module.exports = {
  async index({ page, skip, limit, search }) {
    const query = search ? { title: { $regex: search, $options: "i" } } : {};

    const getItems = await Product.find(query)
      .sort("-createdAt")
      .skip(skip)
      .limit(limit)
      .exec();

    const getItemsCount = await Product.count(query).exec();

    const [items, totalItems] = await Promise.all([getItems, getItemsCount]);

    const totalPages = Math.ceil(totalItems / limit);

    return { items, page, totalPages, totalItems };
  },
};

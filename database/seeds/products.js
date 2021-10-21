const faker = require("faker");

const Product = require("./../../src/models/products");

module.exports = {
  async run(n, item = {}) {
    const items = Array.from(Array(n).keys());

    return Promise.all(
      items.map(() =>
        Product.create({
          title: `${faker.commerce.productName()}`,
          description: `${faker.lorem.words(15)}`,
          price: `${faker.commerce.price(1000, 25000, 0)}`,
          ...item,
        })
      )
    );
  },
};

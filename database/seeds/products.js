const faker = require("faker");

const Product = require("./../../src/models/products");

class MockProduct {
  async run(n) {
    const items = Array.from(Array(n).keys());

    return Promise.all(
      items.map(() =>
        Product.create({
          title: `${faker.commerce.productName()}`,
          description: `${faker.lorem.words(15)}`,
          price: `${faker.commerce.price(1000, 25000, 0)}`,
        })
      )
    );
  }
}

module.exports = new MockProduct();

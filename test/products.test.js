const assert = require("assert");
const { beforeEach, before, describe, it } = require("mocha");
const request = require("supertest");
const server = require("./../index");
const Product = require("./../src/models/products");
const ProductMock = require("./../database/seeds/products");

describe("Product Service", async () => {
  let app;

  before(async () => {
    app = await server();
  });

  beforeEach(async () => {
    await Product.deleteMany({});
  });

  it("Should not list any products", async () => {
    const response = await request(app).get("/products").expect(200);
    assert.strictEqual(response.body.items.length, 0);
  });

  it("Should list all products", async () => {
    await ProductMock.run(10);
    const response = await request(app).get("/products").expect(200);
    assert.strictEqual(response.body.items.length, 10);
  });

  it("Should limit products results", async () => {
    await ProductMock.run(10);

    const rows = 5;
    const response = await request(app)
      .get(`/products?rows=${rows}`)
      .expect(200);

    assert.strictEqual(response.body.items.length, rows);
  });

  it("Should paginate products", async () => {
    await ProductMock.run(11);
    const response = await request(app).get(`/products?page=2`).expect(200);
    assert.strictEqual(response.body.items.length, 1);
  });

  it("Should filter products by name", async () => {
    await ProductMock.run(10);

    const productName = "Testing Filter";
    await ProductMock.run(1, { title: productName });

    const response = await request(app)
      .get(`/products?search=${productName}`)
      .expect(200);

    assert.strictEqual(response.body.items.length, 1);
    assert.strictEqual(response.body.items[0].title, productName);
  });

  it("Should return total items quantity", async () => {
    await ProductMock.run(13);

    const response = await request(app).get(`/products`).expect(200);

    assert.strictEqual(response.body.totalItems, 13);
  });
});

const faker = require("faker");

const Product = require("./../../src/models/products");

const FAKER_IMAGES = [
  "https://img2.gratispng.com/20180212/wzq/kisspng-couch-eames-lounge-chair-furniture-moooi-white-minimalist-lounge-sofa-5a81d0a2510285.0677320615184569943318.jpg",
  "https://img2.gratispng.com/20180214/ufq/kisspng-couch-club-chair-textile-chaise-longue-fabric-sofa-5a84f7c0ad4ce9.6391577415186636167099.jpg",
  "https://img2.gratispng.com/20180204/zue/kisspng-couch-clip-art-sofa-transparent-background-5a76a8bce6f0c4.6157081715177258849459.jpg",
  "https://img2.gratispng.com/20180305/dxq/kisspng-loveseat-table-couch-furniture-grey-sofa-multiplayer-5a9d786bbc31a0.2927894015202694197709.jpg",
  "https://img2.gratispng.com/20180305/piw/kisspng-loveseat-chair-couch-yellow-sofa-5a9d78579fcd27.5967996115202693996546.jpg",
  "https://img2.gratispng.com/20180529/qvr/kisspng-couch-furniture-living-room-fauteuil-sofa-bed-modern-sofa-5b0cec4d739475.7942342115275735814734.jpg",
  "https://img2.gratispng.com/20180310/lje/kisspng-sofa-bed-couch-modern-minimalist-sofa-5aa385024f3a53.1787779315206658583245.jpg",
  "https://img2.gratispng.com/20180319/brq/kisspng-table-furniture-couch-chair-red-sofa-furniture-icon-png-5ab05799e82382.0276864815215062019509.jpg",
  "https://img2.gratispng.com/20180214/xoq/kisspng-couch-sofa-bed-chair-living-room-furniture-sofa-5a84f9c51616b1.4675478715186641330905.jpg",
];

module.exports = {
  async run(n, item = {}) {
    const items = Array.from(Array(n).keys());

    return Promise.all(
      items.map(() =>
        Product.create({
          title: `${faker.commerce.productName()}`,
          description: `${faker.lorem.words(15)}`,
          price: `${faker.commerce.price(1000, 25000, 0)}`,
          image: `${faker.random.arrayElement(FAKER_IMAGES)}`,
          ...item,
        })
      )
    );
  },
};

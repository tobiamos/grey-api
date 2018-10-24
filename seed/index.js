const { sequelize } = require('../models');
const faker = require('faker');

const result = []

function generateFakeData(faker) {
  return {
    name: faker.commerce.productName(),
    description: faker.lorem.words(),
    price: faker.commerce.price(),
    color: faker.commerce.color(),
    category: faker.commerce.department(),
    image: faker.image.fashion(),
  }
};


setInterval(() => {
  result.push(generateFakeData(faker))
  console.log(result);
}, 2000);

/* ID
    Name
    Description
    Price
    Category
    Image
    Color
 */
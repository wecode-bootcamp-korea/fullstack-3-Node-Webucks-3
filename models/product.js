const prisma = require("./index");

const getProducts = async () => {
  const coffeeProducts = await prisma.$queryRaw`
    SELECT * FROM product;
  `;
  return coffeeProducts;
};

module.exports = { getProducts };

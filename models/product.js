const prisma = require("./index");
const getProducts = async () => {
  const coffeeProducts = await prisma.$queryRaw`
  SELECT * FROM product;
  `;
  // console.log(coffeeProducts, 1);
  // console.log(1);
  return coffeeProducts;
};

module.exports = { getProducts };

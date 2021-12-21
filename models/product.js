const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getProducts = async () => {
  const coffeeProducts = await prisma.$queryRaw`
  SELECT * FROM product;
  `;
  console.log(coffeeProducts);
  return coffeeProducts;
};

module.exports = { getProducts };

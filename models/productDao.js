const prisma = require("./index");

const getProducts = async () => {
	const products = await prisma.$queryRaw`
    SELECT * FROM products
  `;
	console.log(products);
	return products;
};

const getCategories = async () => {
	const categories = await prisma.$queryRaw`
    SELECT * FROM categories
  `;
	return categories;
};

module.exports = { getProducts, getCategories };

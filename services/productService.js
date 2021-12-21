const { productController } = require("../controllers");
const productDao = require("../models/productDao");

const getProducts = async () => {
	const products = await productDao.getProducts();

	console.log(products);
	return products;
};

const getCategories = async () => {
	const categories = productDao.getCategories();

	return categories;
};

module.exports = { getProducts, getCategories };

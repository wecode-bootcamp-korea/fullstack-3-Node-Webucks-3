const productDao = require('../models/productDao');

const categories = async () => {
	return await productDao.getCategoreis();
};
const productList = () => {
	const product = productDao.getProductList();

	if (!product) {
		const error = new Error('Not exist list');
		error.statusCode = 400;

		throw error;
	} else {
		return product;
	}
};
const productDetail = async () => {
	return await productDao.getProductDetails();
};

module.exports = { categories, productList, productDetail };

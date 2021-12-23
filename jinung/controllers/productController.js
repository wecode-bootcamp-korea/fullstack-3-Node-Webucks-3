const productService = require('../services/productService');

const categories = async (req, res) => {
	try {
		const categories = await productService.categories();

		return res.status(200).json({ data: categories });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const productList = async (req, res) => {
	try {
		const productList = await productService.productList();

		return res.status(200).json({ data: productList });
	} catch (err) {
		res.status(err.statusCode || 500).json({ message: err.message });
	}
};

const productDetail = async (req, res) => {
	try {
		const productDetail = await productService.productDetail();

		return res.status(200).json({ data: productDetail });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { categories, productList, productDetail };

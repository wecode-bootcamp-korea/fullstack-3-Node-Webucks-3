const res = require("express/lib/response");
const productService = require("../services/productService");

const getProducts = async (req, res) => {
	try {
		const products = await productService.getProducts();

		return res.status(200).json({ products });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: err.message });
	}
};

const getCategories = async (req, res) => {
	try {
		const categoires = await productService.getCategories();

		return res.status(200).json({ categoires });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: err.message });
	}
};

module.exports = { getProducts, getCategories };

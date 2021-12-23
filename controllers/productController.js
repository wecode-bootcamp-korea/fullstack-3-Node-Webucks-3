const res = require("express/lib/response");
const { products } = require("../models");
const productService = require("../services/productService");

const getProducts = async (req, res) => {
	try {
		const products = await productService.getProducts();

		return res.status(200).json({ products });
	} catch (err) {
		console.log(err);
		return res.status(err.statusCode || 500).json({ message: err.message });
	}
};

const getCategories = async (req, res) => {
	try {
		const categoires = await productService.getCategories();

		return res.status(200).json({ categoires });
	} catch (err) {
		console.log(err);
		return res.status(err.statusCode || 500).json({ message: err.message });
	}
};

const getDetail = async (req, res) => {
	try {
		const id = req.params.id;
		const detail = await productService.getDetail(id);

		return res.status(200).json({ detail });
	} catch (err) {
		console.log(err);

		return res.status(err.statusCode || 500).json({ message: err.message });
	}
};

const createProduct = async (req, res) => {
	try {
		const { korean_name, english_name, category_id } = req.body;
		const REQUIRED_KEYS = { korean_name, english_name, category_id };

		for (let key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
				return res.status(400).json({ message: "KEY_ERROR" });
			}
		}

		await productService.createProduct(korean_name, english_name, category_id);

		return res.status(201).json({ message: "CREATE_SUCCESS" });
	} catch (err) {
		console.log(err);
		return res.status(err.statusCode || 500).json({ message: err.message });
	}
};

const updateProduct = async (req, res) => {
	try {
		const id = req.query.id;

		const { korean_name, english_name, category_id } = req.body;
		if (!id) {
			return res.status(400).json({ message: "KEY_ERROR" });
		}

		await productService.updateProduct(
			id,
			korean_name,
			english_name,
			category_id
		);

		return res.status(200).json({ message: "UPDATE_SUCCESS" });
	} catch (err) {
		console.log(err);

		return res.status(err.statusCode || 500).json({ message: err.message });
	}
};

const deleteProduct = async (req, res) => {
	try {
		const id = req.query.id;
		console.log("controller", id);

		if (!id) {
			return res.status(400).json({ message: "KEY_ERROR" });
		}

		await productService.deleteProduct(id);

		return res.status(204).json({ message: "DELETE_SUCCESS" });
	} catch (err) {
		console.log(err);

		return res.status(err.statusCode || 500).json({ message: err.message });
	}
};

module.exports = {
	getProducts,
	getCategories,
	getDetail,
	createProduct,
	updateProduct,
	deleteProduct,
};

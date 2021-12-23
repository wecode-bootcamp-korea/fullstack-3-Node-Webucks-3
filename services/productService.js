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

const getDetail = async (id) => {
	const { detail, allergies } = await productDao.getDetail(id);

	console.log("detail :", detail);

	if (!detail) {
		const error = new Error("NOT_EXIST");
		error.statusCode = 404;

		throw error;
	}

	detail["allergies"] = allergies;

	return detail;
};

const createProduct = async (korean_name, english_name, category_id) => {
	console.log(korean_name);
	const [product] = await productDao.getProductByKoreanName(korean_name);
	console.log(product);

	if (product) {
		const error = new Error("ALREADY_EXIST");
		error.statusCode = 400;

		throw error;
	}

	await productDao.createProduct(korean_name, english_name, category_id);
};

const updateProduct = async (id, korean_name, english_name, category_id) => {
	const [product] = await productDao.getProductById(id);

	const categories = await productDao.getCategories();

	function isExistCategories(category_id) {
		let categoriesIdArr = [];
		for (let key in categories) {
			categoriesIdArr.push(categories[key].id);
		}
		console.log(categoriesIdArr);

		return categoriesIdArr.includes(category_id);
	}

	const existCategories = await isExistCategories(category_id);

	if (!product) {
		const error = new Error("NOT_EXIST_PRODUCT");
		error.statusCode = 400;

		throw error;
	}

	if (
		korean_name === product.korean_name &&
		english_name === product.english_name &&
		category_id === product.category_id
	) {
		const error = new Error("변경된 사항이 없음");
		error.statusCode = 400;

		throw error;
	}

	if (!existCategories) {
		const error = new Error("존재하지 않는 카테고리id");
		error.statusCode = 400;

		throw error;
	}

	await productDao.updateProduct(id, korean_name, english_name, category_id);
};

const deleteProduct = async (id) => {
	const [product] = await productDao.getProductById(id);
	console.log("service", product);

	if (!product) {
		const error = new Error("NOT_EXIST_PRODUCT");
		error.statusCode = 400;

		throw error;
	}

	await productDao.deleteProduct(id);
};

module.exports = {
	getProducts,
	getCategories,
	getDetail,
	createProduct,
	updateProduct,
	deleteProduct,
};

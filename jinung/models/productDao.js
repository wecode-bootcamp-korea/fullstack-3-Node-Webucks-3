const prisma = require('./index');

const getCategoreis = async () => {
	const product = await prisma.$queryRaw`
    SELECT 
			id, 
			name 
		FROM 
			categories
  `;
	console.log('categories in dao: ', product);
	return product;
};

const getProductList = async () => {
	const product = await prisma.$queryRaw`
		SELECT 
			categories.name, 
			products.kor_name, 
			products.eng_name
		FROM 
			products
		JOIN 
			categories 
		ON 
			categories.id = products.category_id;
  `;
	console.log('productList in dao: ', product);
	return product;
};

const getProductDetails = async () => {
	const product = await prisma.$queryRaw`
		SELECT 
			categories.name, 
			products.kor_name, 
			products.eng_name, 
			allergies.name
		FROM 
			products
		JOIN 
			categories 
		ON 
			categories.id = products.category_id
		JOIN 
			product_allergies 
		ON 
			product_allergies.id = products.id
		JOIN 
			allergies ON allergies.id = product_allergies.allergy_id
		WHERE 
			categories.id = 4;
	`;
	console.log('productDetail in dao: ', product);
	return product;
};

module.exports = { getCategoreis, getProductList, getProductDetails };

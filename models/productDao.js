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

const getDetail = async (id) => {
	const [detail] = await prisma.$queryRaw`
    SELECT 
      products.id,
      korean_name,
      english_name,
      categories.name,
      images.image_url
    FROM products
    JOIN categories ON products.category_id = categories.id
    JOIN images ON images.product_id = products.id
    WHERE products.id = ${id};
  `;

	const [allergies] = await prisma.$queryRaw`
    SELECT
      allergies.name
    FROM allergies
    JOIN products_allergies ON allergies.id = products_allergies.allergy_id
    JOIN products ON products.id = products_allergies.product_id
    WHERE products.id = ${id} 
  `;

	console.log(detail);
	return { detail, allergies };
};

const getProductByKoreanName = async (korean_name) => {
	const product = await prisma.$queryRaw`
    SELECT * from products
    WHERE korean_name = ${korean_name};
  `;
	console.log("dao", product);
	return product;
};

const getProductById = async (id) => {
	const product = await prisma.$queryRaw`
    SELECT * from products
    WHERE id = ${id};
  `;
	console.log("dao", product);
	return product;
};

const createProduct = async (korean_name, english_name, category_id) => {
	const newProduct = await prisma.$queryRaw`
    INSERT INTO products
      (korean_name,
      english_name,
      category_id)
    VALUES
      (${korean_name},
      ${english_name},
      ${category_id});
  `;

	const setCount = await prisma.$queryRaw`
    SET @COUNT = 0;
  `;
	const reArrange = await prisma.$queryRaw`
  UPDATE products SET products.id = @COUNT:=@COUNT+1;
  `;

	return newProduct;
};

const updateProduct = async (id, korean_name, english_name, category_id) => {
	await prisma.$queryRaw`
    UPDATE products
    SET
      korean_name=${korean_name},
      english_name=${english_name},
      category_id=${category_id}
    WHERE id=${id};
  `;
};

const deleteProduct = async (id) => {
	console.log(id);
	await prisma.$queryRaw`
    DELETE 
    FROM products
    WHERE id = ${id}
  `;

	const setCount = await prisma.$queryRaw`
    SET @COUNT = 0;
  `;
	const reArrange = await prisma.$queryRaw`
  UPDATE products SET products.id = @COUNT:=@COUNT+1;
  `;
};

module.exports = {
	getProducts,
	getCategories,
	getDetail,
	getProductByKoreanName,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};

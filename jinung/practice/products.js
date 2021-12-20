const { v4: uuidv4 } = require('uuid');

const products = (req, res) => {
	res.json({
		data: [
			{
				id: 1,
				kornName: '토피 넛 콜드 브루',
				engName: 'Toffee Nut Cold Brew',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdf',
			},
			{
				id: 2,
				korName: '나이트로 바닐라 크림',
				engName: 'Nitro Vanilla Cream',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 3,
				korName: '나이트로 콜드 브루',
				engName: 'Nitro Cold Brew',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 4,
				korName: '돌체 콜드 브루',
				engName: 'Dolce Cold Brew',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 5,
				korName: '바닐라 크림 콜드 브루',
				engName: 'Vanilla Cream Cold Brew',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 6,
				korName: '벨벳 다크 모카 나이트로',
				engName: 'Velvet Dark Mocha Nitro',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 7,
				korName: '시그니처 더 블랙 콜드 브루',
				engName: 'Signature The Black Cold Brew',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 8,
				korName: '제주 비자림 콜드 브루',
				engName: 'Jeju Forest Cold Brew',
			},
			{
				id: 9,
				korName: '콜드 브루',
				engName: 'Cold Brew',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 10,
				korName: '콜드 브루 몰트',
				engName: 'Cold Brew Malt',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 11,
				korName: '콜드 브루 오트 라떼',
				engName: 'Cold Brew Oat Latte',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 12,
				korName: '콜드 브루 플로트',
				engName: 'Cold Brew Float',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 13,
				korName: '프렌치 애플 타르트 나이트로',
				engName: 'French Apple Tarte Nitro',
				category: '콜드 브루 커피',
				categoryId: 1,
				imageUrl: 'asdfdd',
			},
			{
				id: 14,
				korName: '아이스 커피',
				engName: 'Iced Coffee',
				category: '브루드 커피',
				categoryId: 2,
				imageUrl: 'asdfdd',
			},
			{
				id: 15,
				korName: '오늘의 커피',
				engName: 'Brewed Coffee',
				category: '브루드 커피',
				categoryId: 2,
				imageUrl: 'asdfdd',
			},
		],
	});
};

const createProducts = (req, res) => {
	const products = [];
	console.log('Request Body: ', req.body);
	const { id, korName, engName, imageUrl, category, categoryId } = req.body;
	const product = {
		id: uuidv4(id),
		korName: korName,
		engName: engName,
		category: category,
		categoryId: categoryId,
		imageUrl: imageUrl,
	};

	products.push(product);
	res.status(201).send({ data: products });
};

const updateProducts = (req, res) => {
	const products = [
		{
			id: 1,
			kornName: '토피 넛 콜드 브루',
			engName: 'Toffee Nut Cold Brew',
			category: '콜드 브루 커피',
			categoryId: 1,
			imageUrl: 'asdf',
		},
		{
			id: 2,
			korName: '나이트로 바닐라 크림',
			engName: 'Nitro Vanilla Cream',
			category: '콜드 브루 커피',
			categoryId: 1,
			imageUrl: 'asdfdd',
		},
	];
	const { id } = req.body;
	console.log('Request Body: ', req.body);

	const product = products.filter((product) => product.id === id);
	console.log(product);
	console.log(product[0].engName);
	product[0].engName = 'newCoffee';

	// products.push(product);
	res.send({ data: products });
};

const deleteProducts = (req, res) => {
	const products = [];
	const { id } = req.body;

	for (i = 0; i < products.length; i++) {
		const product = products[i];
		if (product.id === id) {
			delete product[i];
		}
	}
	return res.status(204).send({ data: products });
};
module.exports = { products, createProducts, updateProducts, deleteProducts };

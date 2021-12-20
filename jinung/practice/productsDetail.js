const productsDetail = (req, res) => {
	res.json({
		data: {
			id: 1,
			korName: '토피 넛 콜드 브루',
			engName: 'Toffee Nut Cold Brew',
			description: '콜드 브루로 깔끔하게 즐기는 토피 넛 음료! 드디어 출시된 토피 넛 콜드 브루! 부드러운 토피 넛 폼과 어우러지는 콜드 브루의 깔끔함',
			allergeics: '우유',
			nutritionInfo: {
				calories: 195,
				fat: '10g',
				protein: '1g',
				sodium: '55mg',
				sugars: '18g',
				caffeine: '225mg',
			},
		},
	});
};

module.exports = { productsDetail };

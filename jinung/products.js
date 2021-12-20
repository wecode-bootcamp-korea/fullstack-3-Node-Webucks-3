const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const products = prisma.products.createMany({
	data: [
		{
			korName: '토피 넛 콜드 브루',
			engName: 'Toffee Nut Cold Brew',
			category_id: 1,
		},
		{
			korName: '오늘의 커피',
			engName: 'Brewed Coffee',
			category_id: 2,
		},
		{
			korName: '돌체 콜드 브루',
			engName: 'Dolce Cold Brew',
			category_id: 1,
		},
		{
			korName: '제주 까망 크림 프라푸치노',
			engName: 'Jeju Black Sesame Cream Frappuccino',
			category_id: 4,
		},
		{
			korName: '바닐라 빈 라떼',
			engName: 'Vanilla Bean Latte',
			category_id: 3,
		},
		{
			korName: '딸기 딜라이트 요거트 블렌디드',
			engName: 'Strawberry Delight Yogurt Blended',
			category_id: 5,
		},
		{
			korName: '블랙 티 레모네이드 피지오',
			engName: 'Black Tea Lemonade Starbucks Fizzio',
			category_id: 6,
		},
		{
			korName: '라임 패션 티',
			engName: 'Lime Passion Tea',
			category_id: 7,
		},
		{
			korName: '제주 스노잉 백록담',
			engName: 'Jeju Snowing Baengnokdam',
			category_id: 8,
		},
		{
			korName: '기운내라임 190ML',
			engName: 'Lime & Lemon',
			category_id: 9,
		},
	],
});

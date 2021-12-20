const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const categories = await prisma.categories.createMany({
	data: [
		{
			name: '콜드 브루 커피',
		},
		{
			name: '브루드 커피',
		},
		{
			name: '에스프레소',
		},
		{
			name: '프라푸치노',
		},
		{
			name: '블렌디드',
		},
	],
});

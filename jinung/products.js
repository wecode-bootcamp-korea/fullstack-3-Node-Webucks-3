const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const productsList = async (req, res) => {
	try {
		const productsList = await prisma.$queryRaw`
			SELECT * from products
		`;
		return res.status(200).json({ productsList });
	} catch {
		console.log(err);
		return res.staus(400).json({ message: err.message });
	}
};

module.exports = { productsList };

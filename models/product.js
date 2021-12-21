const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const getProduct = async (req, res) => {
  try {
    const { name } = req.body;

    const coffeeCategories = await prisma.$queryRaw`
            SELECT * FROM categories;
          `;
    console.log(coffeeCategories);
    return res.status(201).json({ message: "CREATED", data: coffeeCategories });
  } catch (err) {
    console.log(err);
    return res.json({ message: err.message });
  }
};

module.exports = { getProduct };

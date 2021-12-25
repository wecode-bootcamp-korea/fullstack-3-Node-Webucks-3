// const getProduct = async (req, res) => {
//   try {
//     const { name } = req.body;

//     const coffeeCategories = await prisma.$queryRaw`
//           SELECT * FROM categories;
//         `;
//     console.log(coffeeCategories);
//     return res.status(201).json({ message: "CREATED", data: coffeeCategories });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message });
//   }
// };

// const getDetail = async (req, res) => {
//   try {
//     const { korean_name, english_name, category, image_url } = req.body;

//     const coffeeList = await prisma.$queryRaw`
//           SELECT * FROM product;
//         `;
//     console.log(coffeeList);
//     return res.status(201).json({ data: coffeeList }); // 5
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: err.message }); // 6
//   }
// };

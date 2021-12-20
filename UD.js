const http = require("http");
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
console.log(prisma);
const app = express();
app.use(express.json()); // for parsing application/json

app.get("/categories", async (req, res) => {
  try {
    const { name } = req.body;

    const coffeeCategories = await prisma.$queryRaw`
      SELECT * FROM categories;
    `;
    console.log(coffeeCategories);
    return res.status(201).json({ message: "CREATED", data: coffeeCategories }); 
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message }); 
  }
});

app.get("/product", async (req, res) => {
  try {
    const { korean_name, english_name, category, image_url } = req.body;

    const coffeeList = await prisma.$queryRaw`
      SELECT * FROM product;
    `; 
    console.log(coffeeList);
    return res.status(201).json({ data: coffeeList }); // 5
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message }); // 6
  }
});

const server = http.createServer(app); // express app 으로 서버를 만듭니다.

const start = async () => {
  // 서버를 시작하는 함수입니다.
  try {
    server.listen(3000, () => console.log(`Server is listening on 3000`));
  } catch (err) {
    console.error(err);
    await prisma.$disconnect(); // 에러가 발생했을 시에 database 연결을 종료합니다.
  }
};

start();

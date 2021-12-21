const http = require("http");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const { getProduct, getDetail } = require("./postings");
const routes = require("./routes");
const app = express();
app.use(express.json()); // for parsing application/json
app.use(routes);
// app.use((err, req, res) => {
//   const { status, message } = err;
//   console.error(err);
//   res.status(status || 500).json({ message });
// });
app.get("/", (req, res) => {
  res.json({ message: "start page" });
});
// app.get("/product", getProduct);

// app.get("/detail", getDetail);

const server = http.createServer(app);

const start = () => {
  // 서버를 시작하는 함수입니다.
  try {
    server.listen(3000, () => console.log(`Server is listening on 3000`));
  } catch (err) {
    console.error(err);
  }
};

start();

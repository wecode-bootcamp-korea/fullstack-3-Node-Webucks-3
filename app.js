// const http = require("http");
import http from "http";
// const express = require("express");
import express from "express";
const sendProducts = require("./coffeeProducts.json");
const sendDetail = require("./coffeeDetail.json");
const sendList = require("./coffeeList.json");
const { sendPosts, createProduct, updatePost } = require("./postings");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "/endpoint" });
});

app.get("/products/categories", (req, res) => {
  res.json(sendList);
});

app.get("/products/2", (req, res) => {
  res.json(sendDetail);
});

app.get("/products/1", (req, res) => {
  res.json(sendProducts);
});

app.post("/signup", () => console.log("signed up!")); // 첫번째 인자에는 endpoint url 을 기입하고,
app.post("/login", () => console.log("logged in!")); // 각각의 요청에 대해 핸들링 하는 함수를 두번째 인자로 넣습니다.
app.get("/products", sendPosts);
app.post("/products", createProduct);
app.put("/products", updatePost);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT}`);
});

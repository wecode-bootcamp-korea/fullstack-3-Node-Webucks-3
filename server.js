const http = require("http");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { categories } = require("./categories");
const {
	products,
	createProduct,
	updateProduct,
	deleteProduct,
} = require("./products");
const { detail } = require("./detail");

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/users/signup", async (req, res) => {
	try {
		const { email, name, password } = req.body;

		console.log("email :", email, "name :", name);

		const createUser =
			await prisma.$queryRaw`INSERT INTO users (email, name, password) VALUES (${email}, ${name}, ${password})`;

		return res.status(201).json({ message: "CREATED" });
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: err.message });
	}
});

app.get("/", (req, res) => {
	res.json({ message: "/ backend start" });
});

app.get("/products/categories", categories);
app.get("/products", products);
app.get("/products/2", detail);
app.post("/products", createProduct);
app.put("/products", updateProduct);
app.delete("/products", deleteProduct);

const server = http.createServer(app);

const start = async () => {
	try {
		server.listen(8000, () => console.log("Sever is listening on 8000"));
	} catch (err) {
		console.log(err);
		await prisma.$disconnect();
	}
};

start();

const http = require("http");
const express = require("express");
const routes = require("./routes");
//const { PrismaClient } = require("@prisma/client");

const app = express();
app.use(express.json());
app.use(routes);

//const prisma = new PrismaClient();

app.get("/", (req, res) => {
	res.json({ message: "/ backend start" });
});

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

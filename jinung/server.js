const http = require('http');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const routes = require('./routes');

const PORT = 8000;
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(routes);

const server = http.createServer(app);
const start = async () => {
	try {
		server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
	} catch {
		console.log(err);
		await prisma.$disconnect();
	}
};

start();

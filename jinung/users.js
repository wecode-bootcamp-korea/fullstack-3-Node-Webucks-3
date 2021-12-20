const http = require('http');
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { info } = require('console');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.post('/users/signup', async (req, res) => {
	try {
		const { email, name, password } = req.body;

		console.log('email: ', email, 'name: ', name);

		const createdUser = await prisma.$queryRaw(`INSERT INTO users(email, password VALUES ('${email}', '${password}'))`);

		return res.status(201).send({ message: 'Crated' });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ message: err.message });
	}
});

const signIn = async (req, res) => {
	//
	try {
		const { email, password } = req.body;
		const REQUIRED_KEYS = { email, password };

		for (let in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
				return res.status(400).json({ message: `KEY_ERROR: ${info}` });
			}
		}

		const [user] = await prisma.$queryRaw`
			SELECT id, email, password FROM users WHERE email = ${email}
		`;
		console.log('users: ', user);
	} catch {
		console.log(err);
		return res.status(500).json({ message: err.message });
	}
};

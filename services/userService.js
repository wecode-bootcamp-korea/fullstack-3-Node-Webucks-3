const userDao = require("../models/userDao");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const makeHash = async (password) => {
	return await bcrypt.hash(password, 10);
};

const signIn = async (email, password) => {
	const [user] = await userDao.getUserByEmail(email);

	console.log("user in service: ", user);

	if (!user) {
		const error = new Error("INVALID_USER");
		error.statusCode = 400;

		throw error;
	}

	const hashedPassword = await makeHash(password);

	if (user.password !== hashedPassword) {
		const error = new Error("INVALID_USER");
		error.statusCode = 400;

		throw error;
	}

	const token = "12345";

	return token;
};

const signUp = async (email, password, username, address, phone_number) => {
	const [user] = await userDao.getUserByEmail(email);

	if (user) {
		const error = new Error("already exist email");
		error.statusCode = 400;

		throw error;
	}

	const hashedPassword = await makeHash(password);
	await userDao.createUser(
		email,
		hashedPassword,
		username,
		address,
		phone_number
	);
};

module.exports = { signIn, signUp };

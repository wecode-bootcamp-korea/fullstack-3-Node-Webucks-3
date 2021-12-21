const { prisma } = require("@prisma/client");
const userDao = require("../models/userDao");

const signIn = async (email, password) => {
	const [user] = await userDao.getUserByEmail(email);

	console.log("user in service: ", user);

	if (!user) {
		const error = new Error("INVALID_USER");
		error.statusCode = 400;

		throw error;
	}

	if (user.password !== password) {
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
	} else {
		await userDao.createUser(email, password, username, address, phone_number);
	}
};

module.exports = { signIn, signUp };

const userDao = require("../models/userDao");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const makeHash = async (password) => {
	return await bcrypt.hash(password, 10);
};

const signIn = async (email, password) => {
	const [user] = await userDao.getUserByEmail(email);
	console.log(user);
	if (!user) {
		const error = new Error("INVALID_USER");
		error.statusCode = 400;

		throw error;
	}

	const hashedPassword = await makeHash(password);

	const compare = (password, dbPassword) => {
		const isSame = bcrypt.compareSync(password, dbPassword);
		return isSame;
	};

	if (!compare(password, user.password)) {
		const error = new Error("INVALID_USER");
		error.statusCode = 400;

		throw error;
	}

	const token = jwt.sign({ id: user.id }, "wecode_fullstack", {
		expiresIn: "30m",
	});

	console.log("token : ", token);
	console.log(jwt.verify(token, "wecode_fullstack"));

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

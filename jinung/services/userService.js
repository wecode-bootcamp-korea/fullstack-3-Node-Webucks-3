const userDao = require('../models/userDao');

const signIn = async (email, password) => {
	const [user] = await userDao.getUserByEmail(email);

	console.log('user in service: ', user);

	if (!user) {
		const error = new Error('Invalid User');
		error.statusCode = 400;
		console.log('email: ', email);
		throw error;
	}
	if (user.password !== password) {
		const error = new Error('Invalid User');
		error.statusCode = 400;
		console.log('password: ', password);
		throw error;
	}

	const token = '1234';

	return token;
};

const signUp = async (email, password) => {
	const [user] = await userDao.createUser(email, password);

	console.log('signUp in service: ', user);

	if (!email.includes('@')) {
		const error = new Error("ID must be included '@'");
		error.statusCode = 400;
		throw error;
	}
	if (!password.length >= 8) {
		const error = new Error('Password length must be larger than 8');
		error.statusCode = 400;
		throw error;
	}
};

const findUser = async (email) => {
	const [user] = await userDao.findUser(email);

	console.log('findUser in service: ', user);

	if (email === user.email) {
		const error = new Error('Your email is duplicated');
		error.statusCode = 400;
		throw error;
	}
};

module.exports = { signIn, signUp, findUser };

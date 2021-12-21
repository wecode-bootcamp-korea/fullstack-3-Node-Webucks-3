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
	const [user] = await userDao.findUser(email);

	console.log('user in service: ', user);

	if (user) {
		const error = new Error('Your email is duplicated');
		error.statusCode = 400;
		console.log(user.email);
		throw error;
	} else {
		await userDao.createUser(email, password);
	}
};

module.exports = { signIn, signUp };

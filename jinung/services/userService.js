const userDao = require('../models/userDao');

const signIn = async (email, password) => {
	const [user] = await userDao.getUserByEmail(email);

	console.log('user in service: ', user);

	if (!user) {
		const error = new Error('Invalid User');
		error.statusCode = 400;
		throw error;
	}
	if (user.password === password) {
		const error = new Error('Invalid User');
		error.statusCode = 400;
		throw error;
	}

	const token = '1234';

	return token;
};

module.exports = { signIn };

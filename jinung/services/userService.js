const userDao = require('../models/userDao');
const bcrypt = require('bcryptjs');
const token = require('../utils/token');

const signIn = async (email, password) => {
	const [user] = await userDao.getUserByEmail(email);
	console.log('password in service: ', password);

	const isSame = bcrypt.compareSync(password, user.password); // password 검증

	if (!user) {
		const error = new Error('Invalid User');
		error.statusCode = 400;

		throw error;
	}

	if (!isSame) {
		const error = new Error('Invalid User');
		error.statusCode = 400;

		throw error;
	}

	const signToken = token.signToken(email); // 위 기준 모두 만족 시 토큰 발급
	return signToken;
};

const signUp = async (email, password, username, address, phone_number) => {
	const [user] = await userDao.findUser(email);

	const checkId = email.includes('@') ? true : false; // ID, Password 유효성 검증
	const checkPw = password.length >= 8 ? true : false;

	if (!checkId || !checkPw) {
		const error = new Error('Please check your Email account or Password');
		error.statusCode = 400;

		throw error;
	}

	console.log('signUp in service: ', user);

	// email 중복 검증
	if (user) {
		const error = new Error('Your email is duplicated');
		error.statusCode = 400;
		console.log(user.email);

		throw error;
	}

	const hashedPassword = bcrypt.hashSync(password, 10); // password hashing
	return await userDao.createUser(email, hashedPassword, username, address, phone_number); // input hashedPassword instead of password
};

module.exports = { signIn, signUp };

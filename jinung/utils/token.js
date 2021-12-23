const jwt = require('jsonwebtoken');

const salt = 'THISISSALT';

const signToken = (email) => {
	return jwt.sign({ id: email }, salt, { expiresIn: '30m' });
};

const verifyToken = (token) => {
	try {
		return jwt.verify(token, salt);
	} catch (err) {
		return null;
	}
};

module.exports = { signToken, verifyToken };

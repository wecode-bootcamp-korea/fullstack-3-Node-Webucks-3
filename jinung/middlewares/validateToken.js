const tokenUtils = require('../utils/token');

const validateToken = (req, res, next) => {
	const { token } = req.headers.authorization;
	const decodedToken = tokenUtils.verifyToken(token);

	if (!decodedToken) {
		res.status(400).json({ message: 'Your token is expired or not vaild' });
		return;
	}

	req.email = decodedToken.email;
	next();
};

const likeAuthorizeMiddleware = async (req, res, next) => {
	const { email } = req.params;
	const likeBtn = await isLike(email);
	const isAuthorize = req.email === likeBtn.email;

	if (!isAuthorize) {
		res.status(400).json({ message: 'Authorzation failed' });
		return;
	}

	next();
};

module.exports = { validateToken, likeAuthorizeMiddleware };

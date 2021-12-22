const userService = require("../services/userService");

const signIn = async (req, res) => {
	try {
		const { email, password } = req.body;
		const REQUIRED_KEYS = { email, password };

		for (let key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
				return res.status(400).json({ message: "KEY_ERROR" });
			}
		}

		const token = await userService.signIn(email, password);

		return res.status(201).json({ message: "LOGIN_SUCCESS", token });
	} catch (err) {
		console.log(err);
		return res.status(err.statusCode || 500).json({ message: err.message });
	}
};

const signUp = async (req, res) => {
	try {
		const { email, password, username, address, phone_number } = req.body;
		const REQUIRED_KEYS = { email, password, username, address, phone_number };

		for (let key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
				return res.status(400).json({ message: "KEY_ERROR" });
			}
		}

		await userService.signUp(email, password, username, address, phone_number);

		return res.status(201).json({ message: "CREATED" });
	} catch (err) {
		console.log(err);
		return res.status(err.statusCode || 500).json({ message: err.message });
	}
};

module.exports = { signIn, signUp };

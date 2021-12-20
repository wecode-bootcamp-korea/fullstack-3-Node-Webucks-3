const prisma = require('./index');

const getUserByEmail = async (email) => {
	const user = await prisma.$queryRaw`
        SELECT email, password FROM users WHERE email = ${email}
      `;
	console.log('users in dao: ', user);
	return user;
};

module.exports = { getUserByEmail };

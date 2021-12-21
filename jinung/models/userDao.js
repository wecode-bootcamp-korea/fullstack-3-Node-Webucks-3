const prisma = require('./index');

const getUserByEmail = async (email) => {
	const user = await prisma.$queryRaw`
    SELECT email, password FROM users WHERE email = ${email}
  `;
	console.log('getUserByEmail in dao: ', user);
	return user;
};

const createUser = async (email, password) => {
	const user = await prisma.$queryRaw`
    INSERT INTO users (email, password) VALUES (${email},${password})
  `;
	console.log('createUsers in dao: ', user);
	return user;
};

const findUser = async (email) => {
	const user = await prisma.$queryRaw`
    SELECT email FROM users WHERE email = ${email}
  `;
	console.log('findUser in dao: ', user);
	return user;
};
module.exports = { getUserByEmail, createUser, findUser };

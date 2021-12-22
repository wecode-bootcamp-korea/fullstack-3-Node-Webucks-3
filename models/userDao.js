const prisma = require("./index");

const getUserByEmail = async (email) => {
	const user = await prisma.$queryRaw`
    SELECT
      email, password
    FROM users
    WHERE email = ${email}
  `;

	return user;
};

const createUser = async (
	email,
	hashedPassword,
	username,
	address,
	phone_number
) => {
	await prisma.$queryRaw`
    INSERT INTO users
      (email, password, username, address, phone_number)
    VALUES
      (${email}, ${hashedPassword}, ${username}, ${address}, ${phone_number})
  `;
};

module.exports = { getUserByEmail, createUser };

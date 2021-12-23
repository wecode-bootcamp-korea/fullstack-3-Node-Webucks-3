const prisma = require("./index");

const getUserByEmail = async (email) => {
  console.log("email in model: ", email);
  const user = await prisma.$queryRaw`
        SELECT email, password FROM users WHERE email = ${email}
    `;
  console.log("user in model: ", user);
  return user;
};

const checkUserByEmail = async (email) => {
  const userEmail = await prisma.$queryRaw`
    SELECT email FROM users WHERE email = ${email} ;
  `;
  console.log("checking email", email);
  return userEmail;
};

const createUser = async (email, password) => {
  console.log("createUser :", email);
  await prisma.$queryRaw`
    INSERT INTO users (email, password) VALUES (${email}, ${password});
  `;
};

module.exports = { getUserByEmail, createUser, checkUserByEmail };

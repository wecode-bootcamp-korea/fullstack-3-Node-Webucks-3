const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs"); // 단방향 암호화
const jwt = require("jsonwebtoken");

const makeHash = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePW = async (password, hashedPW) => {
  const isSame = await bcrypt.compare(password, hashedPW);
  return isSame;
};

const signIn = async (email, password) => {
  console.log("email in services: ", email);

  const [user] = await userModel.getUserByEmail(email); // [user] 배열로 들어오는 값을 객체로 바꿔줌

  if (!user) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;

    throw error;
  }

  if (!comparePW) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;

    throw error;
  }
};

const signUp = async (email, password) => {
  console.log("signUp Service", email);

  const [user] = await userModel.getUserByEmail(email);

  console.log("userService user:", user);

  if (email === user.email) {
    throw (error = new Error("이미 가입된 이메일입니다"));
  }

  const hashedPW = await makeHash(password);

  console.log("hashedPW", hashedPW);

  await userModel.createUser(email, hashedPW);
};

module.exports = { signIn, signUp };

const userModel = require("../models/userModel");

const signIn = async (email, password) => {
  console.log("email in services: ", email);

  const [user] = await userModel.getUserByEmail(email); // [user] 배열로 들어오는 값을 객체로 바꿔줌

  if (!user) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;

    throw error;
  }

  if (user.password !== password) {
    const error = new Error("INVALID_USER");
    error.statusCode = 400;

    throw error;
  }

  const token = "1234";

  return token;
};

const signUp = async (email, password) => {
  console.log("signUp Service", email);

  const [user] = await userModel.checkUserByEmail(email);

  console.log("userService user:", user);

  if (email === user.email) {
    throw (error = new Error("이미 가입된 이메일입니다"));
  } else {
    await userModel.createUser(email, password);
  }
};
module.exports = { signIn, signUp };

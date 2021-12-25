const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({ log: ["query"] });

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const REQUIRED_KEYS = { email, password };
    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).json({ message: `KEY_ERROR: ${info}` });
      }
    }
    const createdUser = await prisma.$queryRaw`
        INSERT INTO users(email, password) VALUES (${email}, ${password});
        `;
    return res.status(201).json();
  } catch (err) {
    if (err.meta.code === "1062") {
      return res.status(409).json({ message: "EXISTING_USER" }); // 409는 데이터가 겹칠 때 주로 사용됨
    }
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const REQUIRED_KEYS = { email, password };
    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).json({ message: `KEY_ERROR: ${info}` });
      }
    }

    const [user] = await prisma.$queryRaw`
        SELECT id, email, password FROM users WHERE email = ${email};
        `;
  } catch {
    console.log(err);
    return res.status(500).json();
  }
};

module.exports = { signUp, signIn };

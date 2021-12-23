const express = require("express");
const router = express.Router();

const { userController } = require("../controllers");
// Route 는 오직 Controller 에만 의존 합니다.

router.post("/signin", userController.signIn);

router.post("/signup", userController.signUp);

module.exports = router;

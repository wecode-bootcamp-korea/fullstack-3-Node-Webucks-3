const express = require("express");
const router = express.Router();

const { productController } = require("../controllers");

router.get("/", productController.getProducts);

router.get("/categories", productController.getCategories);

// router.get("/2");

// router.post("/");

// router.put("/");

// router.delete("/");

module.exports = router;

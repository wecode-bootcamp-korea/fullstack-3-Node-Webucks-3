const express = require("express");
const router = express.Router();

const { productController } = require("../controllers");

router.get("/", productController.getProducts);

router.get("/categories", productController.getCategories);

router.get("/:id", productController.getDetail);

router.post("/", productController.createProduct);

router.put("/", productController.updateProduct);

router.delete("/", productController.deleteProduct);

module.exports = router;

const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.categories);
router.get('/list', productController.productList);
router.get('/detail', productController.productDetail);

module.exports = router;

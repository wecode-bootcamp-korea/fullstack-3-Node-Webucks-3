const productService = require("../services/productService");

const getProducts = async (req, res) => {
  const products = await productService.getProducts();

  return res.json(products);
};

module.exports = {
  getProducts,
};

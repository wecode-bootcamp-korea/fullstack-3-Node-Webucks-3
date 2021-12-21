const { productService } = require("../services");

const getProducts = async (req, res) => {
  const products = await productService.getProducts();
  res.json(products);
};

module.exports = {
  getProducts,
};

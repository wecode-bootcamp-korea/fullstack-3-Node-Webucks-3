const { productService } = require("../services");

const getProduct = async (req, res) => {
  const product = await productService.getProduct();
  res.json(product);
};

module.exports = {
  getProduct,
};

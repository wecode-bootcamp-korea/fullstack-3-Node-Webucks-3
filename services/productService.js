const product = require("../models/product");

const getProducts = async () => {
  const products = await product.getProducts();
  return products;
};

module.exports = {
  getProducts,
};

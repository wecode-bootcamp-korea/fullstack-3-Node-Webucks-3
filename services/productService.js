const { product } = require("../models");

const getProducts = () => {
  return product.getProducts();
};

module.exports = {
  getProducts,
};

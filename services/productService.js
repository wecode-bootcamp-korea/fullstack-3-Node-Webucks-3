const { product } = require("../models");

const getProduct = () => {
  return product.getProduct();
};

module.exports = {
  getProduct,
};

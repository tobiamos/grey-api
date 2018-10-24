const { Product } = require('../models');

const { sendJSONResponse } = require('../helpers');

module.exports.createProduct = async (req, res) => {
   const product = await Product.create(req.body);
   return sendJSONResponse(res, 200, product, req.method, 'Product created!')
  
};

module.exports.findOneProduct = async (req, res) => {
  const product = await Product.findById(req.params.productId)
  if (!product) {
    return sendJSONResponse(res, 404, null, req.method, 'product not found');
  }
  return sendJSONResponse(res, 200, product, req.method, 'Product found ')

};

module.exports.findAllProducts = async (req, res) => {
 const products = await Product.findAll({
  attributes: ['id','price', 'name']
 });
 return sendJSONResponse(res, 200, products, req.method, 'Products found');
};
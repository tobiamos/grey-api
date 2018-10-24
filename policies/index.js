const joi = require('joi');

module.exports.createProduct = {
  body: {
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().required(),
    category: joi.string().required(),
    image: joi.string().required(),
    color: joi.string().required(),
    
  }
}

module.exports.findOneProduct = {
  params: {
    productId: joi.string().required(),
  }
}

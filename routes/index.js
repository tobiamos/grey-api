const express = require('express');

const productController = require('../controllers');
const productPolicy = require('../policies');
const { catchErrors, validate } = require('../helpers');

const router = express.Router();

router.get(
  '/products',
  catchErrors(productController.findAllProducts)
);

router.post(
  '/products',
  validate(productPolicy.createProduct),
  catchErrors(productController.createProduct),
);

router.get(
  '/products/:productId',
  validate(productPolicy.findOneProduct),
  catchErrors(productController.findOneProduct),
);

module.exports = router;
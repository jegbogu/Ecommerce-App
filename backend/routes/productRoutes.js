const express = require('express');
const routes = express.Router();
const {getProducts, getProductsById} = require('../controller/productControllers');

//@desc get all products from db
//@routes  GET api/products
//@access public
routes.get('/',getProducts);


//@desc get all products from db
//@routes  GET api/products
//@access public
routes.get('/:id', getProductsById);

module.exports = routes

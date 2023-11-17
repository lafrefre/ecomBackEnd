// import models
const Product = require('./Product');
const Category = require('../models/Category');
const Tag = require('../models/Tag');
const ProductTag = require('../models/ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

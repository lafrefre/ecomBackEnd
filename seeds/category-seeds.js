const {Category} = require('../models');

const categoryData = [
  { catagory_name: 'Electronics' },
  { catagory_name: 'Clothing' },
  { catagory_name: 'Books' },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
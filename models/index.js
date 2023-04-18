// Import all the models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Create association between Product and Category models
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'cascade'
});

// Create association between Category and Product models
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
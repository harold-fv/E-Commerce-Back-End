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

// Create a many-to-many association between Product 
// and Tag models using ProductTag as the junction table
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Create a many-to-many association between Tag 
// and Product models using ProductTag as the junction table
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// Export all the models to be used in other parts of the application
module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};
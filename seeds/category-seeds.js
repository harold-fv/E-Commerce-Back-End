// Import the Category model from the models folder
const { Category } = require('../models');

// Function to seed the Category table with sample data
const seedCategories = () => Category.bulkCreate(categoryData);

// Sample data for the Category table
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Export the seedCategories function to be used in other parts of the application
module.exports = seedCategories;

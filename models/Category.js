// Import necessary dependencies and modules
const { Model, DataTypes } = require('sequelize');

// Import the database connection configuration
const sequelize = require('../config/connection');

// Create a Category class that extends Sequelize Model
class Category extends Model {}

// Initialize Category model with its attributes and configuration options
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Export the Category model to be used in other parts of the application
module.exports = Category;

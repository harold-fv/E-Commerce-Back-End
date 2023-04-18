// Import necessary dependencies and modules
const { Model, DataTypes } = require('sequelize');

// Import the database connection configuration
const sequelize = require('../config/connection');

// Create a ProductTag class that extends Sequelize Model
class Product extends Model {}

// Initialize ProductTag model with its attributes and configuration options
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references:{
        model:'product', key:'id'
      } ,
      
    },
   tag_id: {
      type: DataTypes.INTEGER,
      references:{
      model:'tag', key:'id'
      } ,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Export the ProductTag model to be used in other parts of the application
module.exports = Product;

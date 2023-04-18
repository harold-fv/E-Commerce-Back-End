// Import necessary dependencies and modules
const { Model, DataTypes } = require('sequelize');

// Import the database connection configuration
const sequelize = require('../config/connection');

// Create a Tag class that extends Sequelize Model
class Tag extends Model {}

// Initialize Tag model with its attributes and 
// configuration options
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export the Tag model to be used in other parts of the application
module.exports = Tag;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DisplayProperty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DisplayProperty.init({
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    propertyType: DataTypes.ENUM("Triplex","Condo","House"),
    rentAmount: DataTypes.STRING,
    squareFootage: DataTypes.STRING,
    amenities: DataTypes.STRING,
    availability: DataTypes.STRING,
    images: DataTypes.STRING,
    numberOfBedrooms: DataTypes.STRING,
    numberOfBathrooms: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DisplayProperty',
  });
  return DisplayProperty;
};
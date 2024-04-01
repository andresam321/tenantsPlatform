'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MaintenanceRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MaintenanceRequest.init(
  { 
    description:{
    type: DataTypes.STRING,
    }, 
    status:{
    type: DataTypes.ENUM('pending', 'in_progress', 'completed')
    },
  }, {
    sequelize,
    modelName: 'MaintenanceRequest',
  });
  return MaintenanceRequest;
};
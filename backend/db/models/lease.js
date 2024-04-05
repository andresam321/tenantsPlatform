'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lease.belongsTo(models.Tenant, {
        foreignKey:"tenantId"
      })
      
    }
  }
  Lease.init({
    tenantId: DataTypes.INTEGER,
    start_date: DataTypes.INTEGER,
    end_date: DataTypes.INTEGER,
    active: {
      type: DataTypes.ENUM("yes","no","pending start date", "pending cancellation")
    }, 
  }, {
    sequelize,
    modelName: 'Lease',
  });
  return Lease;
};
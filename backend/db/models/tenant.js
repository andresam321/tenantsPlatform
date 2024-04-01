'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tenant.belongsTo(models.User, {
        foreignKey:"userId"
      })
      Tenant.hasMany(models.Lease,{
        foreignKey:"leaseId",
        onDelete:"CASCADE",
        hooks: true,
      })
      Tenant.belongsTo
    }
  }
  Tenant.init({
    userId: DataTypes.INTEGER,
    moveInDate: DataTypes.DATE,
    moveOutDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tenant',
  });
  return Tenant;
};
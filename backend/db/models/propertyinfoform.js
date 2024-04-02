'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyInfoForm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PropertyInfoForm.init({
    propertyName: DataTypes.STRING,
    address: DataTypes.STRING,
    firstName:{
      type: DataTypes.STRING
    },
    lastName:{
      type: DataTypes.STRING
    },
    phoneNumber:{
      type: DataTypes.INTEGER
    },
    emal:{
      type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [3, 256],
          isEmail: true
        }
    },
    birthDay:{
      type: DataTypes.DATE
    },
    numberOfAdults:{
      type:DataTypes.ENUM("Just me","2","3","4+"),
      allowNull:false
    },
    numberOfKids:{
      type:DataTypes.ENUM("1","2","3","4+"),
      allowNull:false
    },
    unitInterestedIn:{
      type:DataTypes.ENUM("1","2","3")
    },
    creditScoreRange:{
      type:DataTypes.ENUM("100-199","200-299","300-399","400-499","500-599","600-699",
      "700+","Rather Not Answer"),
      allowNull:false
    },
    work:{
      type:DataTypes.ENUM("Full Time", "Part Time", "Self Employed","Unemployed","Rather Not Answer"),
      allowNull:false
    },
    proofOfIncome:{
      type:DataTypes.ENUM("Cash", "Check", "PayStubs", "Electronically","Rather Not Answer"),
      allowNull:false
    },
    evictionOnRecord:{
      type:DataTypes.ENUM("No","Yes","Rather Not Answer"),
      allowNull:false
    },
    timeOnPreviousResidence:{
      type:DataTypes.ENUM("Less Then 1 Year", "Between 1 and 2 years","3 Years or more"),
      allowNull:false
    },
    typeOfPet:{
      type:DataTypes.ENUM("Dog","Cat","Other","None"),
      allowNull:false
    },
    additionalInfo:{
      type:DataTypes.STRING,

    }
  }, {
    sequelize,
    modelName: 'PropertyInfoForm',
  });
  return PropertyInfoForm;
};
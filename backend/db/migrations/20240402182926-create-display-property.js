'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DisplayProperties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.INTEGER
      },
      propertyType: {
        type: Sequelize.ENUM
      },
      rentAmount: {
        type: Sequelize.STRING
      },
      squareFootage: {
        type: Sequelize.STRING
      },
      amenities: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.STRING
      },
      numberOfBedrooms: {
        type: Sequelize.STRING
      },
      numberOfBathrooms: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DisplayProperties');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenantId:{
        type: Sequelize.INTEGER,
        references:{model:"Tenants", key:"id"},
        onDelete:"CASCADE"
      },
      start_date: {
        type: Sequelize.INTEGER
      },
      end_date: {
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.ENUM("yes","no","pending start date", "pending cancellation")
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
    await queryInterface.dropTable('Leases');
  }
};
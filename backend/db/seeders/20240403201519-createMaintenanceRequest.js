'use strict';

const { MaintenanceRequest } = require('../models');


let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await MaintenanceRequest.bulkCreate([
      {
        description: 'Broken faucet in the kitchen',
        status: 'pending',
      },
      {
        description: 'Leaking pipe in the bathroom',
        status: 'in_progress',
      },
      {
        description: 'Electrical issues in the living room',
        status: 'completed',
      },
      {
        description: 'Clogged drain in the utility room',
        status: 'pending',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'MaintenanceRequests';
    const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {
      status: { [Op.in]: ['pending','in_progress','completed','pending'] }
    }, {});
  }
};

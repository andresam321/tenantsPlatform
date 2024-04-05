'use strict';

const { Lease } = require('../models');


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
    await Lease.bulkCreate([
      {
        tenantId: 1,
        start_date:Date('2022-01-01'),
        end_date:Date('2023-01-01'),
        active: 'yes',
      },
      {
        tenantId: 2,
        start_date:Date('2022-01-01'),
        end_date: Date('2023-01-01'),
        active: 'pending start date',
      },
      {
        tenantId: 3,
        start_date: Date('2022-01-01'),
        end_date: Date('2023-01-01'),
        active: 'no',
      },
      {
        tenantId: 4,
        start_date:Date('2022-01-01'),
        end_date:Date('2023-01-01'),
        active: 'pending cancellation',
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
      options.tableName = 'Leases';
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {
      end_date: { [Op.in]: ['2023-01-01','2023-01-01','2023-01-01','2023-01-01'] }
    }, {});
  }
};

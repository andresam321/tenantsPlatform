'use strict';

const { Payment } = require('../models');


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
  await Payment.bulkCreate([
    {
      zelle: 'john@example.com',
      venmo: '@john_doe',
      cashapp: '$JohnDoe123',
      payment_date: Date('2024-03-25'),
    },
    {
      zelle: 'jane@example.com',
      venmo: '@jane_smith',
      cashapp: '$JaneSmith456',
      payment_date: Date('2024-03-26'),
    },
    {
      zelle: 'alice@example.com',
      venmo: '@alice_johnson',
      cashapp: '$AliceJohnson789',
      payment_date: Date('2024-03-27'),
    },
    {
      zelle: 'david@example.com',
      venmo: '@david_brown',
      cashapp: '$DavidBrown101',
      payment_date: Date('2024-03-28'),
    }
  
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Payments';
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {
      venmo: { [Op.in]: ['@john_doe','@jane_smith','@alice_johnson','@david_brown'] }
    }, {});
  }
};

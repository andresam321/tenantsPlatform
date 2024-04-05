'use strict';

const { Admin } = require('../models');


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
  await Admin.bulkCreate([
    {
      userId: 1, 
    },
    {
      userId: 2, 
    },
    {
      userId: 3, 
    },
    {
      userId: 4,
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
    options.tableName = 'Admins';
      const Op = Sequelize.Op;
      return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1,2,3,4] }
    }, {});
  }
};

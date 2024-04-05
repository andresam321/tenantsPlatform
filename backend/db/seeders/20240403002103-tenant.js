'use strict';
const { Tenant } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
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
    await Tenant.bulkCreate([
      { 
        userId: 1,
        startDate: Date('2024-03-01'),
        endDate: Date('2025-03-05')
      },
      { 
        userId: 2,
        startDate: Date('2024-03-10'),
        endDate: Date('2026-03-15')
      },
      { 
        userId: 3,
        startDate: Date('2024-03-15'),
        endDate: Date('2027-05-20')
      },
      { 
        userId: 4,
        startDate: Date('2022-03-10'),
        endDate: Date('2024-03-15')
      },
      ], {validate:true})
    },
  
    async down (queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
        options.tableName = 'Tenants'
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(options, {
          startDate: {
            [Op.in]: ['2022-03-10',"2024-03-01", "2024-03-10", "2024-03-15"],
          },
        }, {});
    }
  };
  
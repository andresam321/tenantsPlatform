'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

// /** @type {import('sequelize-cli').Migration} */
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
    await User.bulkCreate([
      { 
        firstName:"Pop",
        lastName:"doe",
        email: 'demo@user.io',
        username: 'Demo-lition',
        role:"tenant",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName:"Joe",
        lastName:"doe",
        email: 'user1@user.io',
        username: 'FakeUser1',
        role:"admin",
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName:"Broe",
        lastName:"droe",
        email: 'user2@user.io',
        username: 'FakeUser2',
        role:"admin",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName:"loe",
        lastName:"roe",
        email: 'user3@user.io',
        username: 'FakeUser3',
        role:"tenant",
        hashedPassword: bcrypt.hashSync('password4')
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2',"FakeUser3"] }
    }, {});
  }
};



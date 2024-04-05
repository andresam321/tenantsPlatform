'use strict';

const { Notification } = require('../models');


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
    await Notification.bulkCreate([
    {
      content: 'You have a new message',
      timestamp: '2024-03-25 08:00:00',
    },
    {
      content: 'Reminder: Meeting at 10 AM',
      timestamp: '2024-03-25 09:30:00',
    },
    {
      content: 'Your payment has been received',
      timestamp: '2024-03-26 12:00:00',
    },
    {
      content: 'Check out our latest promotions',
      timestamp: '2024-03-27 10:00:00',
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
    options.tableName = 'Notifications';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      content: { [Op.in]: ['You have a new message','Reminder: Meeting at 10 AM','Your payment has been received','Check out our latest promotions'] }
    }, {});
  }
};

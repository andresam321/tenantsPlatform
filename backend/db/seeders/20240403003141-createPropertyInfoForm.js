'use strict';

const {PropertyInfoForm} = require("../models")


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
    await PropertyInfoForm.bulkCreate([
      {
        propertyName: 'Example Property 1',
        address: '123 Example St',
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: 1234567890,
        email: 'john@example.com',
        birthDay: '1990-01-01',
        numberOfAdults: 'Just me',
        numberOfKids: '2',
        unitInterestedIn: '1',
        creditScoreRange: '700+',
        work: 'Full Time',
        proofOfIncome: 'PayStubs',
        evictionOnRecord: 'No',
        timeOnPreviousResidence: 'Less Then 1 Year',
        typeOfPet: 'Dog',
        additionalInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        propertyName: 'Example Property 2',
        address: '456 Example St',
        firstName: 'Jane',
        lastName: 'Smith',
        phoneNumber: 9876543210,
        email: 'jane@example.com',
        birthDay: '1985-05-15',
        numberOfAdults: '2',
        numberOfKids: 'None',
        unitInterestedIn: '2',
        creditScoreRange: '600-699',
        work: 'Part Time',
        proofOfIncome: 'Electronically',
        evictionOnRecord: 'Yes',
        timeOnPreviousResidence: 'Between 1 and 2 years',
        typeOfPet: 'Cat',
        additionalInfo: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        propertyName: 'Example Property 3',
        address: '789 Example St',
        firstName: 'Alice',
        lastName: 'Johnson',
        phoneNumber: 5551234567,
        email: 'alice@example.com',
        birthDay: '1988-09-20',
        numberOfAdults: '3',
        numberOfKids: '1',
        unitInterestedIn: '3',
        creditScoreRange: '500-599',
        work: 'Self Employed',
        proofOfIncome: 'Cash',
        evictionOnRecord: 'No',
        timeOnPreviousResidence: '3 Years or more',
        typeOfPet: 'Other',
        additionalInfo: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        propertyName: 'Example Property 4',
        address: '1011 Example St',
        firstName: 'David',
        lastName: 'Brown',
        phoneNumber: 1237894560,
        email: 'david@example.com',
        birthDay: '1992-12-10',
        numberOfAdults: 'Just me',
        numberOfKids: '4+',
        unitInterestedIn: '1',
        creditScoreRange: '400-499',
        work: 'Unemployed',
        proofOfIncome: 'Rather Not Answer',
        evictionOnRecord: 'Yes',
        timeOnPreviousResidence: 'Less Then 1 Year',
        typeOfPet: 'None',
        additionalInfo: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
    options.tableName = "PropertyInfoForms";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options,{
      address: { [Op.in]: ['123 Example St','456 Example St','789 Example St','1011 Example St']}
    }, {})
  }
};

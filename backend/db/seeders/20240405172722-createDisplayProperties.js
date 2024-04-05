'use strict';

const { DisplayProperty } = require('../models');


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
    await DisplayProperty.bulkCreate([
      {
        address: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: 12345,
        propertyType: 'House',
        rentAmount: '1500',
        squareFootage: '1200',
        amenities: 'Swimming pool, Gym',
        availability: 'Available',
        images: 'image1.jpg, image2.jpg',
        numberOfBedrooms: '3',
        numberOfBathrooms: '2',
      },
      {
        address: '456 Elm St',
        city: 'Othertown',
        state: 'NY',
        zipCode: 54321,
        propertyType: 'Condo',
        rentAmount: '2000',
        squareFootage: '1000',
        amenities: 'Parking garage',
        availability: 'Available',
        images: 'image3.jpg, image4.jpg',
        numberOfBedrooms: '2',
        numberOfBathrooms: '1.5',
      },
      {
        address: '789 Oak St',
        city: 'Anycity',
        state: 'TX',
        zipCode: 98765,
        propertyType: 'Triplex',
        rentAmount: '1800',
        squareFootage: '1500',
        amenities: 'Laundry facility',
        availability: 'Unavailable',
        images: 'image5.jpg, image6.jpg',
        numberOfBedrooms: '4',
        numberOfBathrooms: '3',
      },
      {
        address: '101 Pine St',
        city: 'Sometown',
        state: 'FL',
        zipCode: 56789,
        propertyType: 'House',
        rentAmount: '1700',
        squareFootage: '1100',
        amenities: 'Backyard, Fireplace',
        availability: 'Available',
        images: 'image7.jpg, image8.jpg',
        numberOfBedrooms: '2',
        numberOfBathrooms: '2',
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
    options.tableName = 'DisplayProperties';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
    zipCode: { [Op.in]: [12345, 54321,98765,56789] }
  }, {});
  }
};

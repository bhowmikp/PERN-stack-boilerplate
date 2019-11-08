
const models = require('../models/index');

const { User } = models;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await User.create({
      name: 'Jane Doe',
      email: 'john.doe@test.com'
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Admins', null, {}),
};

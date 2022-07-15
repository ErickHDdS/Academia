'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      name: 'dev',
      // 123456
      password: '$2b$10$c.Q5xgFiQl4y944HT/Nl9eSme4afX8UwncbNE4a.cMiD9gkC4BTFe',
      cpf: '1',
      identity: '1',
      birth_date: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      type: 'SECRETARY'
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', {cpf: '1'});
  }
};

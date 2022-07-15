'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      await Promise.all([
        queryInterface.removeColumn('users', 'type', { transaction: t }),
        queryInterface.sequelize.query('DROP TYPE "enum_users_type"', { transaction: t }),
      ]);

      return queryInterface.addColumn('users', 'type', {
        type: Sequelize.ENUM,
        values: ['SECRETARY', 'PROFESSOR', 'DOCTOR', 'PERSON'],
        allowNull: false,
        defaultValue: 'PERSON',
      }, { transaction: t });
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(async (t) => {
      await Promise.all([
        queryInterface.removeColumn('users', 'type', { transaction: t }),
        queryInterface.sequelize.query('DROP TYPE "enum_users_type"', { transaction: t }),
      ]);

      return queryInterface.addColumn('users', 'type', {
        type: Sequelize.ENUM,
        values: ['ADMIN', 'NORMAL'],
        allowNull: false,
        defaultValue: 'NORMAL',
      }, { transaction: t });
    });
  }
};

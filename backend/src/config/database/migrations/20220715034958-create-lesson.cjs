'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vacancies: {
        type: Sequelize.INTEGER
      },
      horary_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'horary',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        allowNull: false
      },
      modalities_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'modalities',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lessons');
  }
};
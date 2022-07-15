'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weight: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      height: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      pressure: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fat_percentage: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      mass_percentage: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      able: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      imc: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exams');
  }
};
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('credit_cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number_card: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      flag_card: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name_print_card: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('credit_cards');
  }
};
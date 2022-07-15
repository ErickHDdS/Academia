'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      acquired: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
      },
      plan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'plans',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        allowNull: false
      },
      lesson_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lessons',
          key: 'id'
        },
        onDelete: 'RESTRICT'
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
    await queryInterface.dropTable('registrations');
  }
};
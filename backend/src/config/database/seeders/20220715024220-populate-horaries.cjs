'use strict';

function horaryRow(start){
  return { start, created_at: new Date(), updated_at: new Date() }
}

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('horary', [
      horaryRow("06:30"),
      horaryRow("07:00"),
      horaryRow("08:00"),
      horaryRow("08:30"),
      horaryRow("09:00"),
      horaryRow("10:00"),
      horaryRow("10:15"),
      horaryRow("12:00"),
      horaryRow("16:00"),
      horaryRow("17:00"),
      horaryRow("18:00"),
      horaryRow("19:00"),
      horaryRow("20:00"),
     ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('horary');
  }
};

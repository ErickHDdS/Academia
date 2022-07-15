'use strict';

function modalityRow(name){
  return { name, created_at: new Date(), updated_at: new Date() }
}

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('modalities', [
      modalityRow("Musculação"),
      modalityRow("Natação"),
      modalityRow("Crossfit"),
      modalityRow("Musculação"),
      modalityRow("Ritmos"),
      modalityRow("Spinning"),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('modalities');
  }
};

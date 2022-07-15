'use strict';

function imcRow(value, situation){
  return { value, situation, created_at: new Date(), updated_at: new Date() }
}

module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert('imcs', [
      imcRow(14.9, "Extremamente abaixo do peso"),
      imcRow(15.9, "Gravemente abaixo do peso"),
      imcRow(18.5, "Abaixo do peso ideal"),
      imcRow(24.9, "Faixa de peso ideal"),
      imcRow(29.9, "Sobrepeso"),
      imcRow(34.9, "Obesidade grau 1"),
      imcRow(39.9, "Obesidade grau 2"),
      imcRow(100, "Obesidade grau 3")
     ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('imcs');
  }
};

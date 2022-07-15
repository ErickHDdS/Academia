'use strict';

function planRow(value, modalities_id, frequency, type){
  return { value, modalities_id, frequency, type, created_at: new Date(), updated_at: new Date() }
}

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('plans', [
      planRow(215, 2, 2, 'MENSAL'),
      planRow(229, 2, 3, 'MENSAL'),
      planRow(193.5, 2, 2, 'SEMESTRAL'),
      planRow(206.1, 2, 3, 'SEMESTRAL'),
      planRow(182.75, 2, 2, 'ANUAL'),
      planRow(189, 2, 3, 'ANUAL'),
      planRow(125, 1, 7, 'MENSAL'),
      planRow(112.5, 1, 7, 'SEMESTRAL'),
      planRow(106.25, 1, 7, 'ANUAL'),
      planRow(155, 6, 3, 'MENSAL'),
      planRow(139, 6, 3, 'SEMESTRAL'),
      planRow(130, 6, 3, 'ANUAL'),
      planRow(155, 5, 3, 'MENSAL'),
      planRow(139, 5, 3, 'SEMESTRAL'),
      planRow(130, 5, 3, 'ANUAL'),
      planRow(155, 3, 3, 'MENSAL'),
      planRow(139, 3, 3, 'SEMESTRAL'),
      planRow(130, 3, 3, 'ANUAL'),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('plans');
  }
};

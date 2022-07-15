'use strict';

function lessonRow(horary_id, modalities_id, vacancies){
  return { horary_id, modalities_id, vacancies, created_at: new Date(), updated_at: new Date() }
}

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('lessons', [
      lessonRow(1, 3, 30),
      lessonRow(2, 6, 20),
      lessonRow(3, 2, 6),
      lessonRow(4, 3, 30),
      lessonRow(5, 5, 30),
      lessonRow(6, 2, 6),
      lessonRow(7, 3, 30),
      lessonRow(8, 6, 20),
      lessonRow(8, 3, 30),
      lessonRow(9, 6, 20),
      lessonRow(10, 5, 30),
      lessonRow(10, 2, 6),
      lessonRow(11, 5, 30),
      lessonRow(11, 3, 30),
      lessonRow(12, 2, 6),
      lessonRow(12, 5, 30),
      lessonRow(13, 2, 6),
      lessonRow(13, 3, 30),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('lessons');
  }
};

'use strict';

function lessonRow(horary_id, modalities_id, vacancies){
  return { horary_id, modalities_id, vacancies, created_at: new Date(), updated_at: new Date() }
}

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('lessons', [
      lessonRow(1, 3, 30),
      lessonRow(2, 5, 20),
      lessonRow(3, 2, 6),
      lessonRow(4, 3, 30),
      lessonRow(5, 4, 30),
      lessonRow(6, 2, 6),
      lessonRow(7, 3, 30),
      lessonRow(8, 5, 20),
      lessonRow(8, 3, 30),
      lessonRow(9, 5, 20),
      lessonRow(10, 4, 30),
      lessonRow(10, 2, 6),
      lessonRow(11, 4, 30),
      lessonRow(11, 3, 30),
      lessonRow(12, 2, 6),
      lessonRow(12, 4, 30),
      lessonRow(13, 2, 6),
      lessonRow(13, 3, 30),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('lessons');
  }
};

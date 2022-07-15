import LessonModel from '../models/Lesson.js';
import { getAllMappedById } from './horary.js';
import ErrorAPI from '../error/ErrorAPI.js';

export const getSampleFromModalityId = async(id) => {
  const lessons = await LessonModel.findAll({
    attributes: ['id', 'vacancies', 'horary_id'],
    where: { modalities_id: id }
  });

  const horaries = await getAllMappedById();

  return lessons.map(lesson => ({
    id: lesson.getDataValue('id'),
    horary: horaries[lesson.getDataValue('horary_id')],
    vacancies: lesson.getDataValue('vacancies')
  }));
}

export const reduceVacancyOfLesson = async(lessonId) => {
  const lesson = await LessonModel.findByPk(lessonId);

  const vacancies = lesson.getDataValue('vacancies');

  if(vacancies === 0) throw new ErrorAPI(409, "No vacancies in this lesson");

  lesson.setDataValue('vacancies', vacancies - 1);
  return lesson.save();
}

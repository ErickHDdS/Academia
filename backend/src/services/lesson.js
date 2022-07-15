import LessonModel from '../models/Lesson.js';
import { getAllMappedById } from './horary.js';

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
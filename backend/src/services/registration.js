import RegistrationModel from '../models/Registration.js';
import { reduceVacancyOfLesson } from './lesson.js';

export const registerUser = async (userId, planId, lessonId) => {
  await reduceVacancyOfLesson(lessonId);

  return RegistrationModel.create({
    userId,
    planId,
    lessonId
  })
}

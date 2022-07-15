import TrainingModel from '../models/Training.js';

export const findTrainingByUserId = (userId) => TrainingModel.findAll({
  attributes: ['name', 'repetitions'],
  where: { userId }
});

export const registerUser = (trainingData) =>  TrainingModel.create(trainingData);
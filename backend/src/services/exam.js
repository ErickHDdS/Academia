import ExamModel from '../models/Exam.js';

export const findExamByUserId = (userId) => ExamModel.findOne({ where: { userId }});

export const registerOrUpdateExam = async (examData) => {
  const { weight, height, userId } = examData;

  const imc = weight/(height*height);

  const exam = await findExamByUserId(userId);

  const examDataToUpdate = {
    ...examData,
    imc
  };

  if (exam === null) return ExamModel.create(examDataToUpdate);

  return exam.update(examDataToUpdate)
}

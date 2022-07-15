import ExamModel from '../models/Exam.js';

export const registerExam = (examData) => {
  const { weight, height } = examData;

  const imc = weight/(height*height);
  
  return ExamModel.create({
    ...examData,
    imc
  });
}

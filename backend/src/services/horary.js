import HoraryModel from '../models/Horary.js';

export const getAllMappedById = async() => {
  const horaries = await HoraryModel.findAll({
    attributes: ['id', 'start']
  });

  const horariesObj = {};

  horaries.forEach(horary => {
    horariesObj[horary.getDataValue('id')] = horary.getDataValue('start');
  })

  return horariesObj;
};

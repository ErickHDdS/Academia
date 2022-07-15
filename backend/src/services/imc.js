import IMCModel from '../models/imc.js';

export const getAll = () => IMCModel.findAll({
  attributes: ['id', 'value', 'situation']
});
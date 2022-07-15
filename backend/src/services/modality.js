import ModalityModel from '../models/Modality.js';
import { getSampleFromModalityId as getSampleLessonsFromModalityId } from "./lesson.js";
import { getSampleFromModalityId as getSamplePlansFromModalityId } from './plan.js';

export const getAll = async () => {
  const modalities = await ModalityModel.findAll({
    attributes: ['id', 'name']
  });

  const modalitiesWithAssociatedObjects = {}

  await Promise.all(
    modalities.map(async(modality) => {
      const modalityId = modality.getDataValue('id');
  
      const lessons = await getSampleLessonsFromModalityId(modalityId);
    
      const plans = await getSamplePlansFromModalityId(modalityId);
  
      modalitiesWithAssociatedObjects[modality.getDataValue('name')] = {
        lessons,
        plans
      }
    })
  );

  return modalitiesWithAssociatedObjects;
}

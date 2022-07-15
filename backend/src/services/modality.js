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

      console.log({name: modality.getDataValue('name')})
  
      modalitiesWithAssociatedObjects[modality.getDataValue('name')] = {
        lessons,
        plans
      }

      if(modalityId === 1) console.log({plans, modalitiesWithAssociatedObjects});
    })
  );

  return modalitiesWithAssociatedObjects;
}

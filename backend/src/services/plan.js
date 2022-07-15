import PlansModel from '../models/Plans.js';

export const getSampleFromModalityId = async(id) => {
  const plans = await PlansModel.findAll({
    attributes: ['id', 'value', 'frequency', 'type'],
    where: { modalities_id: id }
  });

  return plans.map(plan => ({
    id: plan.getDataValue('id'),
    value: plan.getDataValue('value'),
    frequency: plan.getDataValue('frequency'),
    type: plan.getDataValue('type'),
  }));
}
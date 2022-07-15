import { TrainingService } from '../services/index.js';

class Training {
  static async registerUser(req, res) {
    const { personId } = req.params;
    const trainingData = await TrainingService.registerUser({
      userId: personId,
      ...req.body
    });

    return res.status(201).json(trainingData);
  }
}

export default Training;

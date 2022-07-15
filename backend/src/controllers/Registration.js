import { RegistrationService } from '../services/index.js';

class Registration {
  static async registerUser(req, res) {
    const { userId, planId, lessonId } = req.body
    const registrationData = await RegistrationService.registerUser(userId, planId, lessonId);

    return res.status(201).json(registrationData);
  }
}

export default Registration;

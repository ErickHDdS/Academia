import { UserService } from '../services/index.js';

class User {
  static async register(req, res) {
    const { userData, creditCardData } = await UserService.createUserWithCreditCard(req.body);

    delete userData.password;
    delete creditCardData.userId;

    return res.status(201).json({
      user: userData,
      creditCard: creditCardData
    });
  }

  static async login(req, res) {
    const jwt = await UserService.getToken(req.body);

    return res.cookie('jwt', jwt).status(200).json({ jwt });
  }

  static async logout(req, res) {
    return res.clearCookie('jwt').sendStatus(200);
  }

  static async findAllPerson(req, res) {
    const users = await UserService.getAllPersons();

    return res.status(200).json(users);
  }

  static async findByCpf(req, res) {
    const { cpf } = req.params;
    const user = await UserService.searchUserByCpf(cpf);

    return res.status(200).json(user);
  }

  static async createExam(req, res) {
    const { personId } = req.params;
    const exam = await UserService.createExam(personId, req.body);

    return res.status(201).json(exam);
  }

  static async getTraining(req, res) {
    const { userId } = req.params;
    const training = await UserService.getTraining(userId);

    return res.status(201).json(training);
  }

  static async getExam(req, res) {
    const { userId } = req.params;
    const exam = await UserService.getExam(userId);

    return res.status(200).json(exam);
  }
}

export default User;

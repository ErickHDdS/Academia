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

    delete user.dataValues.password;

    return res.status(200).json(user.dataValues);
  }
}

export default User;

import { UserService } from '../services/index.js';

class User {
  static async register(req, res) {
    const user = await UserService.createUser(req.body);

    return res.status(201).json({
      id: user.getDataValue('id'),
      name: user.getDataValue('name'),
      email: user.getDataValue('email'),
      identificationNumber: user.getDataValue('identificationNumber'),
      document: user.getDataValue('document'),
      office: user.getDataValue('office'),
      type: user.getDataValue('type'),
      updatedAt: user.getDataValue('updatedAt'),
      createdAt: user.getDataValue('createdAt'),
    });
  }

  static async login(req, res) {
    const tokens = await UserService.getToken(req.body);

    return res.status(200).json(tokens);
  }

  static async findAll(req, res) {
    const users = await UserService.getAllUsers();

    return res.status(200).json(users);
  }

  static async findById(req, res) {
    const user = await UserService.getUserById(req.params.id);

    return res.status(200).json(user);
  }

  static async delete(req, res) {
    await UserService.deleteUser(req.params.id);

    return res.sendStatus(204);
  }

  static async update(req, res) {
    await UserService.update(req.params.id, req.body);

    return res.sendStatus(204);
  }

  static async token(req, res) {
    const { chave } = req.params;

    const token = await UserService.getJWTToken(chave);

    return res.status(200).json({ token });
  }
}
export default User;

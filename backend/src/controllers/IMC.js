import { IMCService } from '../services/index.js';

class IMC {
  static async findAll(req, res) {
    const imcs = await IMCService.getAll();

    return res.status(200).json(imcs);
  }
}

export default IMC;

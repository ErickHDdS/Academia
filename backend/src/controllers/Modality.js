import { ModalityService } from '../services/index.js';

class Modality {
  static async findAll(req, res) {
    const modalities = await ModalityService.getAll();

    return res.status(200).json(modalities);
  }
}

export default Modality;

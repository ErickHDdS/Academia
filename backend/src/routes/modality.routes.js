import express from 'express';
import ModalityController from '../controllers/Modality.js';
import routerAdapter from './routerAdapter.js';
import { verifyUserLogged, verifyIsSecretary } from './middlewares/index.js';

const router = express.Router();

router.get('/', verifyUserLogged, verifyIsSecretary, routerAdapter(ModalityController.findAll));

export default router;

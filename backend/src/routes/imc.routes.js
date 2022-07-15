import express from 'express';
import IMCController from '../controllers/IMC.js';
import routerAdapter from './routerAdapter.js';
import { verifyUserLogged } from './middlewares/index.js';

const router = express.Router();

router.get('/', verifyUserLogged, routerAdapter(IMCController.findAll));

export default router;
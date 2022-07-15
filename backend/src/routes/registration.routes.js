import express from 'express';
import RegistrationController from '../controllers/Registration.js';
import routerAdapter from './routerAdapter.js';
import { verifyUserLogged, verifyIsSecretary } from './middlewares/index.js';

const router = express.Router();

router.post('/', verifyUserLogged, verifyIsSecretary, routerAdapter(RegistrationController.registerUser));

export default router;

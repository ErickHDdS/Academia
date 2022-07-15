import express from 'express';
import TrainingController from '../controllers/Training.js';
import routerAdapter from './routerAdapter.js';
import { verifyUserLogged, verifyIsProfessor } from './middlewares/index.js';

const router = express.Router();

router.post('/:personId', verifyUserLogged, verifyIsProfessor, routerAdapter(TrainingController.registerUser));

export default router;

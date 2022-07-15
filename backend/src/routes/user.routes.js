import express from 'express';
import UserController from '../controllers/User.js';
import routerAdapter from './routerAdapter.js';
import { verifyUserLogged, verifyIsSecretary, verifyIsntPerson, verifyIsDoctor } from './middlewares/index.js';

const router = express.Router();

router.post('/', verifyUserLogged, verifyIsSecretary, routerAdapter(UserController.register));
router.post('/login', routerAdapter(UserController.login));
router.post('/logout', verifyUserLogged, routerAdapter(UserController.logout));
router.get('/person', verifyUserLogged, verifyIsntPerson, routerAdapter(UserController.findAllPerson));
router.get('/:cpf', verifyUserLogged, verifyIsntPerson, routerAdapter(UserController.findByCpf));
router.post('/exam/:userId', verifyUserLogged, verifyIsDoctor, routerAdapter(UserController.createExam))

export default router;

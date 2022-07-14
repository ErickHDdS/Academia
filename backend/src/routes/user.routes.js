import express from 'express';
import UserController from '../controllers/User.js';
import routerAdapter from './routerAdapter.js';
import { verifyUserAdmin, verifyUserLogged } from '../middlewares/index.js';

const router = express.Router();

router.post('/', routerAdapter(UserController.register));
router.post('/login', routerAdapter(UserController.login));
// router.get('/', verifyUserLogged, verifyUserAdmin, routerAdapter(UserController.findAll));
router.get('/', routerAdapter(UserController.findAll));
router.get('/:id', verifyUserLogged, verifyUserAdmin, routerAdapter(UserController.findById));
router.delete('/:id', verifyUserLogged, verifyUserAdmin, routerAdapter(UserController.delete));
router.put('/:id', verifyUserLogged, verifyUserAdmin, routerAdapter(UserController.update));
router.get('/token/:chave', routerAdapter(UserController.token));

export default router;

import express from 'express';
import UserController from '../controllers/User.js';
import routerAdapter from './routerAdapter.js';

const router = express.Router();

router.post('/', routerAdapter(UserController.register));
router.post('/login', routerAdapter(UserController.login));
router.post('/logout', routerAdapter(UserController.logout));
router.get('/person', routerAdapter(UserController.findAllPerson));

export default router;

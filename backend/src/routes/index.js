import express from 'express';
import userRoutes from './user.routes.js';

const router = express.Router();

router.use('/user', userRoutes);

router.get('*', (req, res) => res.sendStatus(404));

export default router;

import express from 'express';
import userRoutes from './user.routes.js';
import imcRoutes from './imc.routes.js';
import modalitiesRoutes from './modality.routes.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/imc', imcRoutes);
router.use('/modalities', modalitiesRoutes);

router.get('*', (req, res) => res.sendStatus(404));

export default router;

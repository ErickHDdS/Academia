import express from 'express';
import userRoutes from './user.routes.js';
import imcRoutes from './imc.routes.js';
import modalitiesRoutes from './modality.routes.js';
import registrationRoutes from './registration.routes.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/imc', imcRoutes);
router.use('/modalities', modalitiesRoutes);
router.use('/registration', registrationRoutes);

router.get('*', (req, res) => res.sendStatus(404));

export default router;

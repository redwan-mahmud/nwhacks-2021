import express from 'express';
import jobsRouter from './jobsRouter.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/jobs', jobsRouter);
router.use('/user', userRouter);

export default router;

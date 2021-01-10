import express from 'express';
import jobsRouter from './jobsRouter.js';
import userRouter from './user.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/jobs', jobsRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);
export default router;

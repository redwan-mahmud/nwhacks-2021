import { Router } from 'express';
import { jobsRouter } from './jobsRouter.js';

const router = Router();

router.use('/jobs', jobsRouter);

export { router };

import asyncHandler from 'express-async-handler';
import express from 'express';
import { getJobs, getJobByTitle, addJob } from '../services/job.js';
const router = express.Router();

router.route('/').get(
  asyncHandler(async (req, res, next) => {
    const jobs = await getJobs();

    if (jobs) {
      res.json({
        jobs,
      });
    } else {
      res.status(404);
      const err = new Error('Jobs not found');
      err.status = 404;
      next(err);
    }
  })
);

router.route('/getJob').get(
  asyncHandler(async (req, res, next) => {
    const { title } = req.body;

    const job = await getJobByTitle(title);
    if (job) {
      res.json({
        job,
      });
    } else {
      const err = new Error('Job not found');
      err.status = 404;
      next(err);
    }
  })
);

router.route('/addJob').post(
  asyncHandler(async (req, res, next) => {
    const jobAdded = await addJob({ ...req.body });
    if (jobAdded) {
      res.json(jobAdded);
    } else {
      const err = new Error('Job already exists');
      err.status(400);
      next(err);
    }
  })
);

export default router;

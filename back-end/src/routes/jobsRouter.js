import asyncHandler from 'express-async-handler';
import Job from '../entity/job.js';
import express from 'express';
const router = express.Router();

router.route('/').get(
  asyncHandler(async (req, res) => {
    res.json({
      jobs: await Job.getJobs(),
    });
  })
);

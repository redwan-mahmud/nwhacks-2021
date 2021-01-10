import Job from '../entity/job.js';

Job.getJobs = async function () {
  const jobs = await this.findOne({});

  if (jobs) {
    return jobs;
  } else {
    throw new Error('Jobs not found');
  }
};

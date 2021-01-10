import Job from '../entity/job.js';

Job.getJobs = async function () {
  const jobs = await this.find({});

  if (jobs) {
    return jobs;
  } else {
    throw new Error('Jobs not found');
  }
};

Job.getJobByTitle = async function (title) {
  const job = await this.findOne({ where: { title: title } });

  if (job) {
    return job;
  } else {
    throw new Error('Job not found');
  }
};

import db from '../entity/index.js';

export const getJobs = async function () {
  const jobs = await this.find({});

  if (jobs) {
    return jobs;
  } else {
    throw new Error('Jobs not found');
  }
};

export const getJobByTitle = async function (title) {
  const job = await this.findOne({ where: { title: title } });

  if (job) {
    return job;
  } else {
    throw new Error('Job not found');
  }
};

export const addJob = async function ({
  title,
  paymentRate,
  duration,
  description,
  dateTime,
  status,
  jobReview,
}) {
  const [created] = await db.Job.findOrCreate({
    where: {
      title,
      paymentRate,
      duration,
      description,
      dateTime,
      status,
      jobReview,
    },
  });
  return created;
};

import express from 'express';
import asyncErrorHandler from '../middlewares/asyncErrorHandler.js';
import { hashPassword } from '../utilityFunctions.js';
import { createNewUser } from '../services/user.js';

const router = express.Router();

/* 
  Handles posting of new user, with validation. If user has been successfully created 
  responds with no data and sets head Location to /, else responds with appropriate error
 */
router.post(
  '/',
  asyncErrorHandler(async (req, res, next) => {
    const hashedPassword = await hashPassword(req.body.password);
    const userCreated = await createNewUser({
      ...req.body,
      hashedPassword,
      isEmployer: false,
    });

    if (userCreated) {
      res.header({ Location: '/' });
      return res.status(201).json({});
    } else {
      const err = new Error('User already exists');
      err.status = 400;
      return next(err);
    }
  })
);

export default router;

import express from 'express';
import asyncErrorHandler from '../middlewares/asyncErrorHandler.js';
import { hashPassword } from '../utilityFunctions.js';
import { createNewUser } from '../services/user.js';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../services/user.js';

const router = express.Router();

/* 
  Handles posting of new user, with validation. If user has been successfully created 
  responds with no data and sets head Location to /, else responds with appropriate error
 */
router.post(
  '/',
  asyncErrorHandler(async (req, res, next) => {
    const hashedPassword = await hashPassword(req.body.password);
    const doesUserExist = !!(await findUserByEmail(req.body.email));

    if (!doesUserExist) {
      const user = await createNewUser({
        ...req.body,
        hashedPassword,
        isEmployer: false,
      });
      const payload = {
        userId: String(user.id),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      };

      const accessToken = jwt.sign(
        payload,
        process.env.JWT_SECRET || 'Ky8dA6b^zJGdJ',
        {
          expiresIn: '3h',
        }
      );

      //Send the jwt in the response
      return res.status(201).json({ accessToken, ...payload });
    } else {
      const err = new Error('User already exists');
      err.status = 400;
      return next(err);
    }
  })
);

export default router;

import express from 'express';
import asyncErrorHandler from '../middlewares/asyncErrorHandler.js';
import { createErrorByStatus } from '../utilityFunctions.js';
import { findUserByEmail, verifyPassword } from '../services/user.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

const JWT_EXPIRY = '3h';

export const signIn = asyncErrorHandler(async (req, res) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await findUserByEmail(email);
  } catch (error) {
    const err = createErrorByStatus(401);
    return res.status(401).json(err);
  }

  //Check if encrypted password match
  if (!verifyPassword(password, user.password)) {
    const err = createErrorByStatus(401);
    return res.status(401).json(err);
  }

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
      expiresIn: JWT_EXPIRY,
    }
  );

  //Send the jwt in the response
  res.status(200).json({ accessToken, ...payload });
});

router.post('/', asyncErrorHandler(signIn));

export default router;

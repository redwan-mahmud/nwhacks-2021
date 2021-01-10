import { createErrorByStatus } from '../utilityFunctions.js';
import jwt from 'jsonwebtoken';

const JWT_EXPIRY = '3h';

const checkJwt = (req, res, next) => {
  //Get the jwt token from the head
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    throw new Error('Empty token');
  }

  let jwtPayload;

  //Try to validate the token and get data
  try {
    jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    const err = createErrorByStatus(401);
    return res.status(401).json(err);
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, email } = jwtPayload;
  const newToken = jwt.sign({ userId, email }, process.env.JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
  res.setHeader('token', newToken);

  //Call the next middleware or controller
  next();
};

export default checkJwt;

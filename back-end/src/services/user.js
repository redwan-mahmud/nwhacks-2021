import db from '../entity/index.js';
import bcrypt from 'bcryptjs';

export const createNewUser = async ({
  // firstName,
  // lastName,
  email,
  hashedPassword,
  // street,
  // city,
  // country,
  // phoneNumber,
  // gender,
  // photoURL,
  isEmployer = false,
}) => {
  return await db.User.create({
    // firstName,
    // lastName,
    email,
    password: hashedPassword,
    // street,
    // city,
    // country,
    // phoneNumber,
    // gender,
    // photoURL,
    isEmployer,
  });
};

export const findUserByEmail = async (email) => {
  const user = await db.User.findOne({ where: { email } });

  if (!user) {
    return user;
  }

  return user;
};

export const verifyPassword = async (unhasedPassword, hashedPassword) => {
  return await bcrypt.compare(unhasedPassword, hashedPassword);
};

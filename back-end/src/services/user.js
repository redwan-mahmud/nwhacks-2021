import db from '../entity/index.js';
import bcrypt from 'bcryptjs';

export const createNewUser = async ({
  firstName,
  lastName,
  email,
  hashedPassword,
  // street,
  // city,
  // country,
  // phoneNumber,
  // gender,
  // photoURL,
  isEmployer,
}) => {
  const [created] = await db.User.findOrCreate({
    where: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      // street,
      // city,
      // country,
      // phoneNumber,
      // gender,
      // photoURL,
      isEmployer,
    },
  });

  return created;
};

export const findUserByEmail = async (email) => {
  const user = await db.User.findOne({ where: { email } });

  if (!user) {
    throw Error('User not found');
  }

  return user;
};

export const verifyPassword = async (unhasedPassword, hashedPassword) => {
  return await bcrypt.compare(unhasedPassword, hashedPassword);
};

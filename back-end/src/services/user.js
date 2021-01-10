import db from '../entity/index.js';

export const createNewUser = async ({
  firstName,
  lastName,
  email,
  hashedPassword,
  street,
  city,
  country,
  phoneNumber,
  gender,
  photoURL,
  isEmployer,
}) => {
  const [created] = await db.User.findOrCreate({
    where: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      street,
      city,
      country,
      phoneNumber,
      gender,
      photoURL,
      isEmployer,
    },
  });

  return created;
};

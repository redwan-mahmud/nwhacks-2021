// utility functions
import bcryptjs from 'bcryptjs';

// load modules

// accepts an error code for some reused errors and returns an error object corressponding to the error
const createErrorByStatus = (statusCode) => {
  let err;
  switch (statusCode) {
    case 401:
      err = new Error('Access Denied');
      break;
    case 403:
      err = new Error('Forbidden');
      break;
    default:
      statusCode = 500;
      err = new Error('Server Error');
  }

  err.status = statusCode;
  return err;
};

/*  
  salts and hashes a password string passed in and returns the hash.
  from https://stackoverflow.com/questions/48799894/trying-to-hash-a-password-using-bcrypt-inside-an-async-function
 */
const hashPassword = async (password) => {
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcryptjs.hash(password, saltRounds, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return hashedPassword;
};

// exports utility fuctions
export { hashPassword, createErrorByStatus };

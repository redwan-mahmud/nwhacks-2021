// utility functions

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

// exports utility fuctions
export { asyncErrorHandler, createErrorByStatus };

// Higher order functions, which handles errors for async route functions
const asyncErrorHandler = (cb) => {
  return async (req, res, next) => {
    try {
      return await cb(req, res, next);
    } catch (err) {
      return next(err);
    }
  };
};
export default asyncErrorHandler;

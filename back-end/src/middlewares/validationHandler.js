const validationHandler = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validate;
      return next();
    } catch (err) {
      return next({
        status: 400,
        message: err.errors,
      });
    }
  };
};

export default validationHandler;

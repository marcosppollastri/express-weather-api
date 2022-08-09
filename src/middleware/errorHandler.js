const Errors = require('./errors/codes.json');

module.exports = {
  errorHandler: (err, req, res) => {
    const errorSchema = Errors[err.code] || {
      status: 500,
      message: 'Unexpected error',
    };
    console.log(err);
    const error = err;
    error.message = errorSchema.message;
    error.status = err.details?.cod || errorSchema.status;
    const { status, ...rest } = error;
    res.status(status).json(rest);
  },
};

// Models
const { User } = require('../database/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.body;
  console.log('hello world');
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  // If user doesn't exist, send error message
  if (!user) {
    return next(new AppError('User not found', 404));
  }

  // req.anyPropName = 'anyValue'
  req.user = user;
  next();
});

const userExistsParams = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log('hello worl - id :::>', id);
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  // If user doesn't exist, send error message
  if (!user) {
    return next(new AppError('User not found', 404));
  }

  // req.anyPropName = 'anyValue'
  req.user = user;
  next();
});

module.exports = {
  userExists,
  userExistsParams,
};

// Models
const { Category } = require('../database/category.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const categoryExists = catchAsync(async (req, res, next) => {
  const { id } = req.body;

  const category = await Category.findOne({
    where: { id },
  });

  // If category doesn't exist, send error message
  if (!category) {
    return next(new AppError('Category not found', 404));
  }

  // req.anyPropName = 'anyValue'
  req.category = category;
  next();
});

const categoryExistsParams = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const category = await Category.findOne({
    where: { id },
  });

  // If category doesn't exist, send error message
  if (!category) {
    return next(new AppError('Category not found', 404));
  }

  // req.anyPropName = 'anyValue'
  req.category = category;
  next();
});

module.exports = {
  categoryExists,
  categoryExistsParams,
};

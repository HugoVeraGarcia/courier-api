// Models
const { Branch } = require('../database/branch.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const branchExists = catchAsync(async (req, res, next) => {
  const { id } = req.body;

  const branch = await Branch.findOne({
    where: { id },
  });

  // If branch doesn't exist, send error message
  if (!branch) {
    return next(new AppError('Branch not found', 404));
  }

  // req.anyPropName = 'anyValue'
  req.branch = branch;
  next();
});

const branchExistsParams = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const branch = await Branch.findOne({
    where: { id },
  });

  // If branch doesn't exist, send error message
  if (!branch) {
    return next(new AppError('Branch not found', 404));
  }

  // req.anyPropName = 'anyValue'
  req.branch = branch;
  next();
});

module.exports = {
  branchExists,
  branchExistsParams,
};

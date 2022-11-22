const express = require('express');
const { body } = require('express-validator');

const {
  protectSession,
  protectUsersAccount,
  protectAdmin,
} = require('../middlewares/auth.middlewares');

const {
  branchExists,
  branchExistsParams,
} = require('../middlewares/branch.middlewares');

// controllers functions
const {
  // createBranch,
  // getAllBranch,
  // deleteBranchById,
  // updateBranch,
  getPrice,
} = require('../controllers/shipping.controller');

//router declaration
const router = express.Router();

// get price
router.get('/price', getPrice);

// Protecting below endpoints
//usersRouter.use(protectSession);

// create category
//router.post('/', createBranch);

// get all category
//router.get('/', getAllBranch);

// delete category by id
//router.delete('/:id', branchExistsParams, deleteBranchById);

//  update category
//router.patch('/', branchExists, updateBranch);

module.exports = { shippingRouter: router };

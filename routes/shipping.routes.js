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
  getPrice,
  createShipping,
  updateShipping,
} = require('../controllers/shipping.controller');

//router declaration
const router = express.Router();

// get price
router.get(
  '/price/:ubigeo_origin/:ubigeo_destiny/:height/:width/:large/:weight',
  getPrice
);

// Protecting below endpoints
router.use(protectSession);

// create shipping
router.post('/', createShipping);

//  update shipping
router.patch('/', updateShipping);

module.exports = { shippingRouter: router };

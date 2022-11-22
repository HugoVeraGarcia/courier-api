const express = require('express');
const { body } = require('express-validator');

const {
  protectSession,
  protectUsersAccount,
  protectAdmin,
} = require('../middlewares/auth.middlewares');

const {
  categoryExists,
  categoryExistsParams,
} = require('../middlewares/category.middlewares');

// controllers functions
const {
  createCategory,
  getAllCategory,
  deleteCategoryById,
  updateCategory,
} = require('../controllers/category.controller');

//router declaration
const router = express.Router();

// Protecting below endpoints
//usersRouter.use(protectSession);

// create category
router.post('/', createCategory);

// get all category
router.get('/', getAllCategory);

// delete category by id
router.delete('/:id', categoryExistsParams, deleteCategoryById);

//  update category
router.patch('/', categoryExists, updateCategory);

module.exports = { categoryRouter: router };

const express = require('express');

// Controllers
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  login,
} = require('../controllers/users.controller');

// Middlewares
const {
  userExists,
  userExistsParams,
} = require('../middlewares/users.middlewares');
const {
  protectSession,
  protectUsersAccount,
  protectAdmin,
} = require('../middlewares/auth.middlewares');
const {
  createUserValidators,
} = require('../middlewares/validators.middlewares');

const { EmailIsUnique } = require('../middlewares/emailUnique.middleware');

const usersRouter = express.Router();

usersRouter.post('/', EmailIsUnique, createUserValidators, createUser);

usersRouter.post('/login', login);

// Protecting below endpoints
usersRouter.use(protectSession);

usersRouter.get('/', getAllUsers);

usersRouter.patch('/', userExists, protectUsersAccount, updateUser);

usersRouter.delete('/:id', userExistsParams, protectUsersAccount, deleteUser);

module.exports = { usersRouter };

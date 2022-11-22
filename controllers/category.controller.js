const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const Sequelize = require('sequelize');

const { AppError } = require('../utils/appError');

const { Ubigeo } = require('../database/ubigeo.model');
const { Category } = require('../database/category.model');

// utils
const { catchAsync } = require('../utils/catchAsync');
const sequelize = require('sequelize');

const createCategory = catchAsync(async (req, res, next) => {
  const { description } = req.body;

  const category = await Category.create({
    description,
  });

  res.status(201).json({
    status: 'Success',
    message: 'Category has been created',
    category,
  });
});

const getAllCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findAll({
    where: { status: 'active' },
    order: [['id', 'Asc']],
    attributes: ['description'],
  });
  res.status(200).json({
    category,
  });
});

const deleteCategoryById = catchAsync(async (req, res, next) => {
  const { category } = req;

  await category.update({ status: 'deleted' });

  res.status(200).json({
    message: 'Category has been deleted',
  });
});

const updateCategory = catchAsync(async (req, res, next) => {
  const { category } = req;
  const { description } = req.body;

  console.log('category:::>', category);
  await category.update({ description });

  res.status(200).json({
    message: 'Category has been updated',
  });
});

module.exports = {
  createCategory,
  getAllCategory,
  deleteCategoryById,
  updateCategory,
};

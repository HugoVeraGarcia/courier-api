const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const Sequelize = require('sequelize');

const { AppError } = require('../utils/appError');

const { Branch } = require('../database/branch.model');
const { Ubigeo } = require('../database/ubigeo.model');

// utils
const { catchAsync } = require('../utils/catchAsync');
const sequelize = require('sequelize');

const createBranch = catchAsync(async (req, res, next) => {
  const { ubigeo, address } = req.body;

  const data = await Ubigeo.findOne({
    where: { ubigeo },
    attributes: ['id'],
  });

  const branch = await Branch.create({
    ubigeoId: data.id,
    address,
  });

  res.status(201).json({
    status: 'Success',
    message: 'Branch has been created',
    branch,
  });
});

const getAllBranch = catchAsync(async (req, res, next) => {
  const branch = await Branch.findAll({
    where: { status: 'active' },
    attributes: ['address', 'id'],
    include: { model: Ubigeo },
    //attributes: ['ubigeo', 'country', 'region', 'province', 'district'],

    //order: [['id', 'Asc']],
    //attributes: ['ubigeo_id', 'address'],
  });
  res.status(200).json({
    branch,
  });
});

const deleteBranchById = catchAsync(async (req, res, next) => {
  const { branch } = req;

  await branch.update({ status: 'deleted' });

  res.status(200).json({
    message: 'Branch has been deleted',
  });
});

const updateBranch = catchAsync(async (req, res, next) => {
  const { branch } = req;
  const { ubigeo_id, address } = req.body;

  await branch.update({ ubigeo_id, address });

  res.status(200).json({
    message: 'Branch has been updated',
  });
});

module.exports = {
  createBranch,
  getAllBranch,
  deleteBranchById,
  updateBranch,
};

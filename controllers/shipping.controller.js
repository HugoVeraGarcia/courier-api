const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

//const Sequelize = require('sequelize');

const { AppError } = require('../utils/appError');

//const { Branch } = require('../database/branch.model');
const { Ubigeo } = require('../database/ubigeo.model');

// utils
const { catchAsync } = require('../utils/catchAsync');
const sequelize = require('sequelize');
const { Distancia } = require('../utils/distancia');

const getPrice = catchAsync(async (req, res, next) => {
  const { ubigeo_id_origin, ubigeo_id_destiny } = req.body;

  const data1 = await Ubigeo.findOne({
    where: { id: ubigeo_id_origin },
  });

  const data2 = await Ubigeo.findOne({
    where: { id: ubigeo_id_destiny },
  });

  const Price = (
    Distancia(
      data1.latitude,
      data2.latitude,
      data1.longuitude,
      data2.longuitude
    ) *
    0.05 *
    0.25
  ).toFixed(2);

  res.status(201).json({
    status: 'Success',
    message: 'Price USD has been calculated USD',
    Price,
  });
});

module.exports = {
  getPrice,
};

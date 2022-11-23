const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const Sequelize = require('sequelize');

const { AppError } = require('../utils/appError');

const { Ubigeo } = require('../database/ubigeo.model');

// utils
const { catchAsync } = require('../utils/catchAsync');
const sequelize = require('sequelize');

const loadData = catchAsync(async (req, res, next) => {
  const { country, ubigeo, region, province, district, latitude, longuitude } =
    req.body;

  const data = await Ubigeo.create({
    country,
    ubigeo,
    region,
    province,
    district,
    latitude,
    longuitude,
  });

  res.status(201).json({
    status: 'Success',
    message: 'Ubigeo has been created',
    data,
  });
});

const getAllUbigeo = catchAsync(async (req, res, next) => {
  const ubigeo = await Ubigeo.findAll({
    where: { status: 'active' },
    order: [['id', 'Asc']],
  });
  res.status(200).json({
    ubigeo,
  });
});

const deleteAllUbigeo = catchAsync(async (req, res, next) => {
  const ubigeo = await Ubigeo.destroy({ where: { country: 'PERÚ' } });
  res.status(200).json({
    message: 'Ubigeo deleted',
  });
});

//   const ubigeo = await Ubigeo.findAll({
//   attributes: [
//     // specify an array where the first element is the SQL function and the second is the alias
//     [Sequelize.fn('DISTINCT', Sequelize.col('country')), 'country'],

//     // specify any additional columns, e.g. country_code
//     // 'country_code'
//   ],
// }).then(function (country) {});

const getCountry = catchAsync(async (req, res, next) => {
  const ubigeo = await Ubigeo.findAll({
    attributes: ['country'],
    group: ['country'],
  });
  res.status(200).json({
    ubigeo,
  });
});

// const getProvinceUnique = catchAsync(async (req, res, next) => {
//   const ubigeo = await Ubigeo.findAll({
//     attributes: [
//       [Sequelize.fn('DISTINCT', Sequelize.col('province')), 'province'],
//     ],
//   });
//   res.status(200).json({
//     ubigeo,
//   });
// });

const { QueryTypes } = require('sequelize');

const getProvinceUnique_rawquery = catchAsync(async (req, res, next) => {
  const sequelize = new Sequelize('courier', 'admin', 'root', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

  sequelize.query('SELECT * from ubigeos').then(ubigeo => {
    console.log(ubigeo);
  });

  res.status(200).json({
    ubigeo,
  });
});

const getRegionByCountry = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const ubigeo = await Ubigeo.findAll(
    {
      order: [['region', 'Asc']],
      attributes: ['region'],
      group: ['region'],
    },
    { where: { country: id } }
  );
  res.status(200).json({
    ubigeo,
  });
});

const getProvinceByRegion = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const ubigeo = await Ubigeo.findAll({
    attributes: ['province'],
    group: ['province'],
    where: { region: id },
    order: [['province', 'Asc']],
  });
  res.status(200).json({
    ubigeo,
  });
});

const getDistrictByProvince = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const ubigeo = await Ubigeo.findAll({
    attributes: ['district', 'id'],
    group: ['district', 'id'],
    where: { province: id },
    order: [['district', 'Asc']],
  });
  res.status(200).json({
    ubigeo,
  });
});

const countUbigeo = catchAsync(async (req, res, next) => {
  const ubigeo = await Ubigeo.count();
  res.status(200).json({
    ubigeo,
  });
});
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// import readline from "readline"
// import fs from "fs"
// import { Sequelize, DataType } from "sequelize";

// const sequelize = new Sequelize('app','root,'root', {
//   host:'127.0.0.1',
//   dialect: 'postgres'
// })

// const insertUbigeo = async () => {
//   const {country,ubigeo,region,province,district,latitude,longuitude} = req.body

//   await Ubigeo.bulkCreate({country,ubigeo,region,province,district,latitude,longuitude})

//  const file = readline.createInterface(fs.createReadStream('carga_ubigeo.csv'));

//   file.on('line', async (line) => {
//         //const [country,ubigeo,region,province,district,latitude,longuitude]= line.split(',')
//         //await Ubigeo.create({country,ubigeo,region,province,district,latitude,longuitude})
//     });
//   }

// };

module.exports = {
  loadData,
  getAllUbigeo,
  getCountry,
  getRegionByCountry,
  getProvinceByRegion,
  deleteAllUbigeo,
  countUbigeo,
  getDistrictByProvince,
  // getProvinceUnique,
  // insertUbigeo,
  getProvinceUnique_rawquery,
};

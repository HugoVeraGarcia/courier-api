const express = require('express');
const { body } = require('express-validator');

const {
  protectSession,
  protectUsersAccount,
  protectAdmin,
} = require('../middlewares/auth.middlewares');

// controllers functions
const {
  loadData,
  getAllUbigeo,
  getCountry,
  getRegionByCountry,
  getProvinceByRegion,
  deleteAllUbigeo,
  countUbigeo,
  getDistrictByProvince,
  //getProvinceUnique,
  getProvinceUnique_rawquery,
} = require('../controllers/ubigeo.controller');

//router declaration
const router = express.Router();

// //create data
router.post('/', loadData);

// Protecting below endpoints
//router.use(protectSession);

// get all ubigeo
router.get('/', getAllUbigeo);

// get country
router.get('/country', getCountry);

//region
router.get('/region/:id', getRegionByCountry);

//province
router.get('/province/:id', getProvinceByRegion);

//district
router.get('/district/:id', getDistrictByProvince);

// delete all ubigeo
router.delete('/', deleteAllUbigeo);

// count registers
router.get('/count', countUbigeo);

module.exports = { ubigeoRouter: router };

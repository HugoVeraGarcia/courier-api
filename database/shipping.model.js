const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Shipping = db.define('shipping', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ubigeo_id_origin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destiny_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destiny_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destiny_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destiny_phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ubigeo_id_destiny: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  branch_id: {
    type: DataTypes.INTEGER,
  },
  shipping_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  high_size: {
    type: DataTypes.INTEGER,
  },
  width_size: {
    type: DataTypes.INTEGER,
  },
  large_size: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.FLOAT,
    defaultValue: 'active',
  },
  special_cares: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});

module.exports = { Shipping };

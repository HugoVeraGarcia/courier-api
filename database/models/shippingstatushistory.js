"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShippingStatusHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShippingStatusHistory.hasMany(models.ShippingStatus);
      ShippingStatusHistory.hasMany(models.Shipping);
    }
  }
  ShippingStatusHistory.init(
    {
      shipping_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
      status_date: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ShippingStatusHistory",
    }
  );
  return ShippingStatusHistory;
};

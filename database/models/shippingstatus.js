"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShippingStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShippingStatus.belongsTo(models.ShippingStatusHistory, {
        foreignKey: "status_id",
      });
      ShippingStatus.hasMany(models.Shipping);
    }
  }
  ShippingStatus.init(
    {
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ShippingStatus",
    }
  );
  return ShippingStatus;
};

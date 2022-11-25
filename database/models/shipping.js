"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shipping.belongsTo(models.Category, { foreignKey: "category_id" });
      Shipping.belongsTo(models.Shipping_status, { foreignKey: "status_id" });
      Shipping.belongsTo(models.Shipping_status_history, {
        foreignKey: "status_history_id",
      });
      Shipping.belongsTo(models.Branch, { foreignKey: "branch_id" });
      Shipping.belongsTo(models.Ubigeo, { foreignKey: "ubigeo_origen_id" });
      Shipping.belongsTo(models.Ubigeo, { foreignKey: "ubigeo_destiny_id" });
      Shipping.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Shipping.init(
    {
      user_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      address: DataTypes.STRING,
      ubigeo_origin_id: DataTypes.STRING,
      ubigeo_destiny_id: DataTypes.STRING,
      price: DataTypes.INTEGER,
      status_id: DataTypes.INTEGER,
      shipping_date: DataTypes.DATE,
      category_id: DataTypes.INTEGER,
      branch_id: DataTypes.INTEGER,
      date: DataTypes.DATE,
      status: DataTypes.STRING,
      status_history_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Shipping",
    }
  );
  return Shipping;
};

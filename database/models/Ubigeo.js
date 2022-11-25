"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ubigeo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ubigeo.hasMany(models.Shipping);
      Ubigeo.hasMany(models.User);
      Ubigeo.hasMany(models.Branch);
    }
  }
  Ubigeo.init(
    {
      country: DataTypes.STRING,
      ubigeo_id: DataTypes.STRING,
      region: DataTypes.STRING,
      province: DataTypes.STRING,
      district: DataTypes.STRING,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ubigeo",
    }
  );
  return Ubigeo;
};

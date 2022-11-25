"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Branch.hasMany(models.Shipping);
      Branch.belongsTo(models.Ubigeo, { foreignKey: "ubigeo_id" });
    }
  }
  Branch.init(
    {
      address: DataTypes.STRING,
      ubigeo_id: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Branch",
    }
  );
  return Branch;
};

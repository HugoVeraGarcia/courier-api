const { db, DataTypes } = require("../utils/database.util");

const ShippingInCart = db.define("shippingInCarts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  distance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  base_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
});

module.exports = { ShippingInCart };

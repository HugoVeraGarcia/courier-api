'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shippings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      ubigeo_origin_id: {
        type: Sequelize.STRING
      },
      ubigeo_destiny_id: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      status_id: {
        type: Sequelize.INTEGER
      },
      shipping_date: {
        type: Sequelize.DATE
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      branch_id: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      status_history_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shippings');
  }
};
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ubigeos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ubigeo_id: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.INTEGER
      },
      longitude: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Ubigeos');
  }
};
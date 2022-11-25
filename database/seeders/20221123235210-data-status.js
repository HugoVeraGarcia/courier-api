'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('shippingStatus',[
      {
        description: 'Iniciado',
        status:'active'
      },
      {
        description: 'Cancelado',
        status:'active'
      },
      {
        description: 'En espera para recoger en domicilio',
        status:'active'
      },
      {
        description: 'En centro de distribucion',
        status:'active'
      },
      {
        description: 'En posesion del cartero',
        status:'active'
      },
      {
        description: 'En espera para retirar en sucursal',
        status:'active'
      },
      {
        description: 'Entregado',
        status:'active'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shippingStatus', null, {});
  }
};

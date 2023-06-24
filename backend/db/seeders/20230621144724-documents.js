const { Document } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Document.bulkCreate([
      {
        name: 'Стул',
        quantity: 10,
        deliveryDate: '12.09.2023',
        price: 100,
        currency: 'RUB',
      },
      {
        name: 'Стол',
        quantity: 12,
        deliveryDate: '12.10.2023',
        price: 300,
        currency: 'RUB',
      },
      {
        name: 'Дверь',
        quantity: 12,
        deliveryDate: '12.10.2023',
        price: 300,
        currency: 'RUB',
      },
      {
        name: 'Ручка',
        quantity: 12,
        deliveryDate: '12.10.2023',
        price: 300,
        currency: 'RUB',
      },
      {
        name: 'Окно',
        quantity: 12,
        deliveryDate: '12.10.2023',
        price: 300,
        currency: 'RUB',
      },
    ]);
  },

  async down() {
    await Document.destroy({ truncate: { cascade: true } });
  },
};

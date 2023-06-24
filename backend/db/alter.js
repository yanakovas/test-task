require('dotenv').config();
const { sequelize } = require('./models');

async function main() {
  await sequelize.sync({ alter: true });
  await sequelize.close();
}

main();

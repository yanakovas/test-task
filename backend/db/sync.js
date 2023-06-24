require('dotenv').config();
const { sequelize } = require('./models');

async function main() {
  await sequelize.sync();
  await sequelize.close();
}

main();

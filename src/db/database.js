const { Sequelize } = require('sequelize');

const config = require('../config/database');
const logger = require('../config/logger');

const dbConfig = config['development'];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: info => logger.info(info),
  }
);

module.exports = sequelize;

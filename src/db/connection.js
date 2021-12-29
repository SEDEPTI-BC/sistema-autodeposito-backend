const logger = require('../config/logger');
const sequelize = require('./database');

const connection = sequelize
  .authenticate()

module.exports = connection;

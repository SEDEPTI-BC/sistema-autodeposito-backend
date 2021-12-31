const { Sequelize } = require('sequelize');

const config = require('../config/database');
const logger = require('../config/logger');

const nodeEnv = process.env.NODE_ENV === 'test' ? 'test' : 'development';

// meu deus, pq o dbConfig não pega as infos do .env.test????
const dbConfig = config[nodeEnv];

let sequelize;

// só ta dando certo se setar manualmente o dialect
if (nodeEnv === 'test') {
  dbConfig.dialect = 'sqlite';
  sequelize = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage,
  });
} else {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
      logging: info => logger.info(info),
    }
  );
}

module.exports = sequelize;

const path = require('path');

require('dotenv-safe').config({
  path: path.join(__dirname, '../../.env'),
  example: path.join(__dirname, '../../.env.example')
});

module.exports = {
  // aqui vão as variáveis de ambientes que devem ser exportadas de .env
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  PATH_TO_LOGS: process.env.PATH_TO_LOGS,
  PORT: process.env.PORT
};

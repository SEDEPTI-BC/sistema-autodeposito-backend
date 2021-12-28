require('dotenv-safe').config();
const Winston = require('winston');

const logger = Winston.createLogger({
  level: 'info',
  format: Winston.format.json(),
  transports: [
    new Winston.transports.File({
      name: 'log#error',
      filename: `${process.env.PATH_TO_LOGS}/error.log`,
      level: 'error',
    }),
    new Winston.transports.File({
      name: 'log#combined',
      filename: `${process.env.PATH_TO_LOGS}/combined.log`,
    }),
  ],
});

logger.stream = {
  write: message => logger.info(message.trim()),
};

module.exports = logger;

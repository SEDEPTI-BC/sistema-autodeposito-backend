require('dotenv-safe').config();
const Winston = require('winston');

// FIXME: alterar o import das variáveis de ambiente
// FIXME: melhorar o código

const loggerConfiguration = {
  level: 'silly',
  format: Winston.format.combine(
    Winston.format.label({
      label: `${Winston.level}`
    }),
    Winston.format.timestamp({
      format: 'DD-MMM-YYY HH:mm:ss'
    }),
    Winston.format.align(),
    Winston.format.printf(_ => `${_.level}: ${[_.timestamp]}: ${_.message}`)
  ),
  transports: [
    new Winston.transports.File({
      name: 'log#error',
      filename: `${process.env.PATH_TO_LOGS}/error.log`,
      level: 'error',
    }),
    new Winston.transports.File({
      name: 'log#warn',
      filename: `${process.env.PATH_TO_LOGS}/warn.log`,
      level: 'warn',
    }),
    new Winston.transports.File({
      name: 'log#info',
      filename: `${process.env.PATH_TO_LOGS}/info.log`,
      level: 'info',
    }),
    new Winston.transports.File({
      name: 'log#http',
      filename: `${process.env.PATH_TO_LOGS}/http.log`,
      level: 'http',
    }),
    new Winston.transports.File({
      name: 'log#verbose',
      filename: `${process.env.PATH_TO_LOGS}/verbose.log`,
      level: 'verbose',
    }),
    new Winston.transports.File({
      name: 'log#debug',
      filename: `${process.env.PATH_TO_LOGS}/debug.log`,
      level: 'debug',
    }),
    new Winston.transports.File({
      name: 'log#silly',
      filename: `${process.env.PATH_TO_LOGS}/silly.log`,
      level: 'silly',
    }),
  ],
}

const logger = Winston.createLogger(loggerConfiguration);

logger.stream = {
  write: message => logger.error(message.trim()),
  write: message => logger.warn(message.trim()),
  write: message => logger.info(message.trim()),
  write: message => logger.http(message.trim()),
  write: message => logger.verbose(message.trim()),
  write: message => logger.debug(message.trim()),
  write: message => logger.silly(message.trim()),
};

module.exports = logger;

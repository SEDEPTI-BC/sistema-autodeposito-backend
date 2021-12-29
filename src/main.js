const { PORT } = require('./config/vars');
const logger = require('./config/logger');
// const connection = require('./db/connection');
const app = require('./config/express');

app.listen(PORT, _ => {
  try {
    logger.info(`Server running on port ${PORT}`);
  } catch (e) {
    logger.error(`An error occurred: ${e}`);
  }
});

module.exports = app;

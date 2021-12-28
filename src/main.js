const { PORT } = require('./config/vars');
const logger = require('./config/logger');
const connection = require('./config/connection');
const app = require('./config/express');

app.listen(PORT, _ => logger.info(`Server running on port ${PORT}`));

module.exports = app;

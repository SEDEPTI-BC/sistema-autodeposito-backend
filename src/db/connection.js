const sequelize = require('./database');

const connection = sequelize
  .authenticate()
  .then(_ => console.log(`Database connection establish successfully`))
  .catch(e => console.log(`Database connection establishment had an error`));

module.exports = connection;

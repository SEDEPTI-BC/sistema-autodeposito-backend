const sequelize = require('../../../db/database');

module.exports = () => {
  return Promise.all(
    Object.keys(sequelize.models).map(key => {
      console.log(key);
      return sequelize.models[key].destroy({ truncate: true, force: true });
    })
  );
};

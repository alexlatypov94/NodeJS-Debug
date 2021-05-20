const Sequelize = require('sequelize');
//database username   password
const sequelize = new Sequelize('gamedb', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5433,
});

const User = require('./models/user')(sequelize, Sequelize);
const Game = require('./models/game')(sequelize, Sequelize);
sequelize.authenticate().then(
  function success() {
    console.log('Connected to DB');
  },

  function fail(err) {
    console.log(`Error: ${err}`);
  }
);

module.exports = { sequelize, User, Game };

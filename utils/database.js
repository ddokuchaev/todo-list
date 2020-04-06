const Sequelize = require("sequelize");
const keys = require("../keys/keys");
const sequelize = new Sequelize(keys.DB_NAME, keys.USER_NAME, keys.PASSWORD, {
  host: "db4free.net",
  dialect: "mysql",
});

module.exports = sequelize;

const Sequelize = require("sequelize");
const DB_NAME = "sql7331647";
const USER_NAME = "sql7331647";
const PASSWORD = "Yx_r3DvCm8qfA$f";
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: "db4free.net",
  dialect: "mysql",
});

module.exports = sequelize;

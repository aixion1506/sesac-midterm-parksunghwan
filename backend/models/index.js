const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json')["development"];

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

const todoModel = require('./Todo')(sequelize, Sequelize);

db.todo = todoModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
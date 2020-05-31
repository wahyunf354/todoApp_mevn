const Sequelize = require('sequelize')
const dbConfig = require('../config/db.config.js')

// define config to sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  operatorAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.todos = require('./todo.models.js')(sequelize, Sequelize)

module.exports = db

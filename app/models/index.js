const dbconfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

db.tems

module,exports = db;
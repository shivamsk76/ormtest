const sequelize = require('sequelize')

module.exports = new sequelize('shivam','shivam', '8965969260s',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
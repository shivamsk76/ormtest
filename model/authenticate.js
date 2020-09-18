const Sequelize = require('sequelize')
const dbConfig = require('../config/config')

var authenticate = dbConfig.define('authenticate1', {
    username:{
        type: Sequelize.STRING
    },
    password:
    {
        type: Sequelize.STRING
    }
},
{
    tableName: 'authenticate1',
    timestamps: false
})
authenticate.removeAttribute('id')
// authenticate.removeAttribute('updatedAt')
// authenticate.removeAttribute('createdAt')

module.exports = authenticate

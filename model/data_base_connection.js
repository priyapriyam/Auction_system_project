var knex = require ("knex")
var mysql = require ('mysql')
var database = ({
    client : 'mysql',
    connection:{
        host :"127.0.0.1",
        user:"root",
        password:"password",
        database: "auction_system"
    },
    useNullAsDefault: true
})

module.exports = knex(database);

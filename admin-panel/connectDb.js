// connect to database...
require('dotenv').config({ path: './environmentVariable/passwordDb.env' });
const config = require('config');
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host:'localhost',
        user:'root',
        password: config.get('mainserver.password'),
        database:'db_cookbook'
    }   
});
// exports connect
module.exports = knex;
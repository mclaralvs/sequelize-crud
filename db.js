const { Client } = require('pg');

const client = new Client ({
    host: 'localhost',
    user: 'postgres',
    port: 5434,
    password: 'root',
    database: 'atividade'
})

client.connect()


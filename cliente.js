const Sequelize = require('sequelize');
const sequelize = new Sequelize('atividade', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5434
});

const Cliente = sequelize.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

    // CREATE
    Cliente.create({
        nome: 'Joao Victor',
        email: 'joao.victor@gmail.com'
    })

    // READ
    /*const clientes = sequelize.query('SELECT * FROM clientes');
    console.log(clientes);*/

    // UPDATE
    Cliente.update({ 
        nome: 'Maria Clara Alves de Faria' },
        { where: { id: 1 } }
    )

    // DELETE
    Cliente.destroy({ 
        where: { id: 1 }
    });

//Cliente.sync({force: true})

//module.exports = Cliente;
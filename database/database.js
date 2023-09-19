const Sequelize = require('sequelize');

const connection = new Sequelize('guiapergunta', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  //logging: false // PARA ESCONDER O CODIGO DE TESTE
});

module.exports = connection;
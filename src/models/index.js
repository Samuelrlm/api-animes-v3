const sequelize = require('../config/database');
const Animes = require('./animes');

sequelize.sync({ alter: true })
    .then(() => console.log("Tabelas sincronizadas"))
    .catch((error) => console.error("Erro ao sincronizar tabelas", error));

module.exports = {
    Animes
}
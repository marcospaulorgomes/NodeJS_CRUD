const Sequelize = require('sequelize'); // Classes com letra Maiúscula
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;
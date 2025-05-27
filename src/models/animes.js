const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Animes = sequelize.define('Animes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    rating: {
        type: DataTypes.FLOAT,
        validate: {
            min: 0,
            max: 10
        }
    },
    imageUrl: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    }
})

module.exports = Animes;
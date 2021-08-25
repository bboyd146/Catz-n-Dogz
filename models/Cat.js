const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cat extends Model { }

Cat.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        is_stray: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cat'
    }
);

module.exports = Cat;
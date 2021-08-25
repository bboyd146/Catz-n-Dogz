const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dog extends Model { }

Dog.init(
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
        modelName: 'dog'
    }
);

module.exports = Dog;
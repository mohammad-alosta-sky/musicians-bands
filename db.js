const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

// TODO - create the new sequelize connection

const sequelize = new Sequelize({
    dialect: "sqlite",
storage: path.join(__dirname, "sequelize.sqlite")})

module.exports = {
    sequelize,
    DataTypes
};

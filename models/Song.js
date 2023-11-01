const {DataTypes, sequelize} = require('../db');

// TODO - define the Song model
let Song = sequelize.define("Song", {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
});

module.exports = {
    Song
};
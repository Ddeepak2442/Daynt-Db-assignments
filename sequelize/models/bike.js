const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Bike extends Model {}
Bike.init({
  name: DataTypes.STRING,
  company: DataTypes.STRING,
}, { sequelize, modelName: 'bike' });

module.exports = Bike;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Car extends Model {}
Car.init({
  name: DataTypes.STRING,
  company: DataTypes.STRING,
}, { sequelize, modelName: 'car' });

module.exports = Car;

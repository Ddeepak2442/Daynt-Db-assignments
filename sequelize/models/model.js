const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class VehicleModel extends Model {}
VehicleModel.init({
  modelNumber: DataTypes.STRING,
  version: DataTypes.STRING,
  type: DataTypes.ENUM('Car', 'Bike'),
  referenceId: DataTypes.INTEGER,
}, { sequelize, modelName: 'vehicle_model' });

module.exports = VehicleModel;

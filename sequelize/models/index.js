const Car = require('./car');
const Bike = require('./bike');
const VehicleModel = require('./model');

Car.hasMany(VehicleModel, { foreignKey: 'referenceId', constraints: false, scope: { type: 'Car' } });
VehicleModel.belongsTo(Car, { foreignKey: 'referenceId', constraints: false });

Bike.hasMany(VehicleModel, { foreignKey: 'referenceId', constraints: false, scope: { type: 'Bike' } });
VehicleModel.belongsTo(Bike, { foreignKey: 'referenceId', constraints: false });

module.exports = { Car, Bike, VehicleModel };

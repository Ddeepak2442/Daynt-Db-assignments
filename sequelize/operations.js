const { Car, Bike, VehicleModel } = require('./models');
const sequelize = require('./config/database');

(async () => {
  await sequelize.sync({ force: true });

  const car = await Car.create({ name: 'Model S', company: 'Tesla' });
  const bike = await Bike.create({ name: 'Ninja', company: 'Kawasaki' });

  const carModel = await VehicleModel.create({ modelNumber: 'S1', version: '2021', type: 'Car', referenceId: car.id });
  const bikeModel = await VehicleModel.create({ modelNumber: 'N1', version: '2021', type: 'Bike', referenceId: bike.id });

  const cars = await Car.findAll({ include: VehicleModel });
  const bikes = await Bike.findAll({ include: VehicleModel });

  console.log(JSON.stringify(cars, null, 2));
  console.log(JSON.stringify(bikes, null, 2));
})();

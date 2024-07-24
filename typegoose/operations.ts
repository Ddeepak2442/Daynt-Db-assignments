import connectDB from './config/database';
import { CarModel } from './models/Car';
import { BikeModel } from './models/Bike';
import { ModelModel } from './models/Model';

(async () => {
  await connectDB();

  const car = await CarModel.create({ name: 'Model S', company: 'Tesla' });
  const bike = await BikeModel.create({ name: 'Ninja', company: 'Kawasaki' });

  await ModelModel.create({ modelNumber: 'S1', version: '2021', type: 'Car', referenceId: car._id });
  await ModelModel.create({ modelNumber: 'N1', version: '2021', type: 'Bike', referenceId: bike._id });

  const cars = await CarModel.find().populate('models').exec();
  const bikes = await BikeModel.find().populate('models').exec();

  console.log(cars);
  console.log(bikes);
})();

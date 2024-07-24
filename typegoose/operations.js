"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
const Car_1 = require("./models/Car");
const Bike_1 = require("./models/Bike");
const Model_1 = require("./models/Model");
(async () => {
    await (0, database_1.default)();
    const car = await Car_1.CarModel.create({ name: 'Model S', company: 'Tesla' });
    const bike = await Bike_1.BikeModel.create({ name: 'Ninja', company: 'Kawasaki' });
    await Model_1.ModelModel.create({ modelNumber: 'S1', version: '2021', type: 'Car', referenceId: car._id });
    await Model_1.ModelModel.create({ modelNumber: 'N1', version: '2021', type: 'Bike', referenceId: bike._id });
    const cars = await Car_1.CarModel.find().populate('models').exec();
    const bikes = await Bike_1.BikeModel.find().populate('models').exec();
    console.log(cars);
    console.log(bikes);
})();

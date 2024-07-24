"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./config/database"));
const Model_1 = require("./models/Model");
(async () => {
    await (0, database_1.default)();
    // Update
    const carModel = await Model_1.ModelModel.findOne({ modelNumber: 'S1' });
    if (carModel) {
        carModel.version = '2022';
        await carModel.save();
    }
    // Delete
    const bikeModel = await Model_1.ModelModel.findOne({ modelNumber: 'N1' });
    if (bikeModel) {
        await bikeModel.deleteOne();
    }
})();

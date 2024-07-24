"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    await mongoose_1.default.connect('mongodb+srv://deepak:abcd1234@cluster0.by2e8nz.mongodb.net/firstProject');
};
exports.default = connectDB;

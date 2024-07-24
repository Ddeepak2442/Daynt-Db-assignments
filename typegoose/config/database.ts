import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose.connect('mongodb+srv://deepak:abcd1234@cluster0.by2e8nz.mongodb.net/firstProject');
};

export default connectDB;

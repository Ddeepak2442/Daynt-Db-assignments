import connectDB from "./config/database";
import { ModelModel } from "./models/Model";

(async () => {
    await connectDB();
  
    // Update
    const carModel = await ModelModel.findOne({ modelNumber: 'S1' });
    if (carModel) {
      carModel.version = '2022';
      await carModel.save();
    }
  
    // Delete
    const bikeModel = await ModelModel.findOne({ modelNumber: 'N1' });
    if (bikeModel) {
      await bikeModel.deleteOne();
    }
  })();
  
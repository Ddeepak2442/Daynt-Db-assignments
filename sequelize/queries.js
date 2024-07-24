(async () => {
    // Update
    const carModel = await Model.findOne({ where: { modelNumber: 'S1' } });
    carModel.version = '2022';
    await carModel.save();
  
    // Delete
    const bikeModel = await Model.findOne({ where: { modelNumber: 'N1' } });
    await bikeModel.destroy();
  })();
  
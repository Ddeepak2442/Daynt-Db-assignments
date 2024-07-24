const mysql = require('mysql2/promise');

// Establish connection to the database using a pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: 'assignment',
  password: ""
});

(async () => {
  try {
    // Create tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS car (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        company VARCHAR(255)
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS bike (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        company VARCHAR(255)
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS model (
        id INT AUTO_INCREMENT PRIMARY KEY,
        model_number VARCHAR(255),
        version VARCHAR(255),
        type VARCHAR(255),
        reference_id INT
      );
    `);

    // Insert data
    const [carResult] = await pool.query('INSERT INTO car (name, company) VALUES (?, ?)', ['Model S', 'Tesla']);
    const carId = carResult.insertId;

    const [bikeResult] = await pool.query('INSERT INTO bike (name, company) VALUES (?, ?)', ['Ninja', 'Kawasaki']);
    const bikeId = bikeResult.insertId;

    await pool.query('INSERT INTO model (model_number, version, type, reference_id) VALUES (?, ?, ?, ?)', ['S1', '2021', 'Car', carId]);
    await pool.query('INSERT INTO model (model_number, version, type, reference_id) VALUES (?, ?, ?, ?)', ['N1', '2021', 'Bike', bikeId]);

    // Update a record
    await pool.query('UPDATE car SET name = ? WHERE id = ?', ['Model X', carId]);
    console.log(`Car with id ${carId} has been updated to Model X`);

    // Delete a record
    await pool.query('DELETE FROM bike WHERE id = ?', [bikeId]);
    console.log(`Bike with id ${bikeId} has been deleted`);

    // Query and join data
    const [cars] = await pool.query(`
      SELECT car.*, model.model_number, model.version, model.type 
      FROM car 
      LEFT JOIN model ON car.id = model.reference_id 
      WHERE model.type = 'Car'
    `);

    const [bikes] = await pool.query(`
      SELECT bike.*, model.model_number, model.version, model.type 
      FROM bike 
      LEFT JOIN model ON bike.id = model.reference_id 
      WHERE model.type = 'Bike'
    `);

    console.log('Cars:', cars);
    console.log('Bikes:', bikes);
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end();
  }
})();

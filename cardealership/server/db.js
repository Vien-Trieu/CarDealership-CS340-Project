import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
  host: 'localhost', 
  user: 'root', // Check if 'root' is correct
  password: 'PikachuYT@112', // Check if this is correct
  database: 'car_dealership'
});

export default db;
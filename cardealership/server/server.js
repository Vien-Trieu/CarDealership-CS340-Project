// Import required modules
import express from "express";
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcryptjs';

// Create an Express app
const app = express();
const port = 3000;  

// Middleware
app.use(express.json());  // To parse JSON requests
app.use(cors({
    origin: 'http://localhost:3000'  // Replace with the actual URL of your frontend
}));

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',    // MySQL server host
  user: 'root',         // MySQL username
  password: 'PikachuYT@112',  // MySQL password
  database: 'car_dealership'  // The name database
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

// Existing routes (login, users, cars, etc.)

// Route to purchase a car (update status to "purchased")
app.post('/purchase', (req, res) => {
  const { carId, userId } = req.body;  // The car to be purchased and the user purchasing it

  // Update car's status to 'purchased' and associate it with the user
  const query = 'UPDATE cars SET status = "purchased", user_id = ? WHERE id = ? AND status != "purchased"';
  
  connection.query(query, [userId, carId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error processing purchase' });
    }

    if (results.affectedRows > 0) {
      res.json({ message: 'Car purchased successfully!' });
    } else {
      res.status(400).json({ message: 'Car is already purchased or unavailable' });
    }
  });
});

// Route to order a car (mark as "ordered" in the database)
app.post('/order', (req, res) => {
  const { carId, userId } = req.body;  // The car to be ordered and the user ordering it

  // Update car's status to 'ordered' and associate it with the user
  const query = 'UPDATE cars SET status = "ordered", user_id = ? WHERE id = ? AND status != "purchased" AND status != "ordered"';
  
  connection.query(query, [userId, carId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error processing order' });
    }

    if (results.affectedRows > 0) {
      res.json({ message: 'Car ordered successfully!' });
    } else {
      res.status(400).json({ message: 'Car is already purchased or ordered' });
    }
  });
});

// Routes to get specific car details by ID (for both order and purchase pages)
app.get('/cars/:id', (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM cars WHERE id = ?';
  
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error fetching car details' });
    }

    if (results.length > 0) {
      res.json(results[0]);  // Send the car details
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  });
});

app.post('/api/customers', authenticateToken, async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    
    // Insert customer into the database
    await executeQuery(
      'INSERT INTO customers (name, email, phone, address, user_id) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, address, req.user.id]
    );
    
    res.status(201).json({ message: 'Customer information recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/customers', authenticateToken, async (req, res) => {
  try {
    const customers = await executeQuery('SELECT * FROM customers WHERE user_id = ?', [req.user.id]);
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

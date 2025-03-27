import 'dotenv/config';
import express, { json } from 'express';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2';
import cors from 'cors';

const { sign, verify } = jwt;
const app = express();

// Middleware to enable CORS and parse JSON requests
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000',  // Frontend URL
}));

// Create a MySQL connection pool (recommended for better performance)
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "PikachuYT@112", // Consider using environment variables for security
  database: "car_dealership"
}).promise();

// Test MySQL connection
db.query('SELECT 1')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

// JWT Secret and Admin Password from environment variables (use dotenv for security)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
const DEFAULT_ADMIN_PASSWORD = process.env.DEFAULT_ADMIN_PASSWORD || 'defaultAdminPass';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
  }

  verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid or expired token' });
    }
    req.user = user; // Attach user info to the request object
    next();
  });
};

// **Login endpoint**
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Please fill in all fields' });
  }

  try {
    const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

    if (users.length === 0) {
      return res.status(400).json({ success: false, message: 'Invalid username or password' });
    }

    const employee = users[0];
    const isPasswordCorrect = await compare(password, employee.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ success: false, message: 'Invalid username or password' });
    }

    const token = sign(
      { id: employee.id, username: employee.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ success: true, message: 'Login successful', token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ success: false, message: 'Server error during login' });
  }
});

// **Register endpoint** (for employee registration)
app.post('/api/register', async (req, res) => {
  const { username, password, adminPassword } = req.body;

  // Check if admin password matches the default admin password
  if (adminPassword !== DEFAULT_ADMIN_PASSWORD) {
    return res.status(400).json({ success: false, message: 'Invalid admin password' });
  }

  if (!username || !password || !adminPassword) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  try {
    const hashedPassword = await hash(password, 10);

    // Insert the new employee into the database
    await db.query('INSERT INTO Employee (username, password) VALUES (?, ?)', [username, hashedPassword]);

    res.status(201).json({ success: true, message: 'Employee registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).json({ success: false, message: 'Server error during registration' });
  }
});

// **Get all employees** (secured route)
app.get('/api/employees', authenticateToken, async (req, res) => {
  try {
    const [employees] = await db.query('SELECT id, username FROM Employee');
    res.status(200).json({ success: true, employees });
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(500).json({ success: false, message: 'Server error fetching employees' });
  }
});

// **Start the server**
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
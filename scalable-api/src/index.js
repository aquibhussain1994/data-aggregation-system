// scalable-api/src/index.js
const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'views', 'public')));

// Routes
app.use('/api', studentRoutes);

// MySQL Configuration
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'schoolSystem',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Start the server
pool.getConnection((err, connection) => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }

  console.log('Connected to MySQL database');
  connection.release();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Global error handling for Express
app.on('error', (err) => {
  console.error('Express server error:', err);
});

// Global handling for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// data-aggregation-system/src/config/dbConfig.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'schoolSystem',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Ensure the connection pool is properly exported
module.exports = pool.promise();




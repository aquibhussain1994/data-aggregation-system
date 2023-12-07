// data-aggregation-system/src/models/studentModel.js
const db = require('../config/dbConfig');

class Student {
  static async getTotalStudents() {
    return new Promise((resolve, reject) => {
      db.query('SELECT COUNT(*) AS totalStudents FROM Students', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].totalStudents);
        }
      });
    });
  }

  static async getAverageAge() {
    return new Promise((resolve, reject) => {
      db.query('SELECT AVG(Age) AS averageAge FROM Students', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].averageAge);
        }
      });
    });
  }

}

module.exports = Student;









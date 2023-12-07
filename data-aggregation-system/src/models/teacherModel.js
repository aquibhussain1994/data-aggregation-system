// data-aggregation-system/src/models/teacherModel.js
const db = require('../config/dbConfig');

class Teacher {
  static async getAllTeachers() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Teachers', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  static async getTeacherById(teacherId) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM Teachers WHERE ID = ?', [teacherId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }


  static async getTeacherSubjectCount(subject) {
    return new Promise((resolve, reject) => {
      db.query('SELECT COUNT(*) AS teacherCount FROM Teachers WHERE Subject = ?', [subject], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].teacherCount);
        }
      });
    });
  }
}

module.exports = Teacher;

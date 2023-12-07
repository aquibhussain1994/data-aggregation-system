// data-aggregation-system/src/models/classModel.js
const db = require('../config/dbConfig');

class Class {
  static async getNumberOfClasses() {
    return new Promise((resolve, reject) => {
      db.query('SELECT COUNT(*) AS numberOfClasses FROM Classes', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].numberOfClasses);
        }
      });
    });
  }

}

module.exports = Class;

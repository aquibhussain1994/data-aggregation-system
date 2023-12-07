// scalable-api/src/models/studentModel.js
const db = require('../config/dbConfig');

class Student {
  static async addStudent(data) {
    return db.execute('INSERT INTO Students (Name, Age, Grade, ClassID) VALUES (?, ?, ?, ?)', [
      data.Name,
      data.Age,
      data.Grade,
      data.ClassID,
    ]);
  }

  static async getStudent(id) {
    return db.execute('SELECT * FROM Students WHERE ID = ?', [id]);
  }

  static async listStudents(cursor) {
    const limit = 10;  
    const query = cursor ? 'SELECT * FROM Students WHERE ID > ? LIMIT ?' : 'SELECT * FROM Students LIMIT ?';

    return db.execute(query, [cursor || 0, limit]);
  }

  static async updateStudent(id, data) {
    return db.execute('UPDATE Students SET Name = ?, Age = ?, Grade = ?, ClassID = ? WHERE ID = ?', [
      data.Name,
      data.Age,
      data.Grade,
      data.ClassID,
      id,
    ]);
  }

  static async deleteStudent(id) {
    return db.execute('DELETE FROM Students WHERE ID = ?', [id]);
  }
}

module.exports = Student;

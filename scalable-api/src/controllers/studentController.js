// scalable-api/src/controllers/studentController.js
const Student = require('../models/studentModel');

exports.addStudent = async (req, res) => {
  try {
    const data = req.body;
    console.log('Adding student:', data);
    await Student.addStudent(data);
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const [student] = await Student.getStudent(id);

    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    res.json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.listStudents = async (req, res) => {
  try {
    const cursor = req.query.cursor;
    const [students] = await Student.listStudents(cursor);

    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const [result] = await Student.updateStudent(id, data);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    res.json({ message: 'Student updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await Student.deleteStudent(id);

    if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

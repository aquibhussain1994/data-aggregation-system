// data-aggregation-system/src/controllers/summaryController.js
const Student = require('../models/studentModel');
const Teacher = require('../models/teacherModel');
const Class = require('../models/classModel');

exports.getSummary = async (req, res) => {
  try {
    const totalStudents = await Student.getTotalStudents();
    const averageAge = await Student.getAverageAge();
    const numberOfClasses = await Class.getNumberOfClasses();

    res.json({
      totalStudents,
      averageAge,
      numberOfClasses,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};









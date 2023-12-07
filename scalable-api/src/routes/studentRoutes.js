// scalable-api/src/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/students', studentController.addStudent);
router.get('/students/:id', studentController.getStudent);
router.get('/students', studentController.listStudents);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;

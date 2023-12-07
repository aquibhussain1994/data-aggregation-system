// data-aggregation-system/src/routes/summaryRoutes.js
const express = require('express');
const router = express.Router();
const summaryController = require('../controllers/summaryController');

router.get('/summary', summaryController.getSummary);

module.exports = router;









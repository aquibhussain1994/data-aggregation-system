// data-aggregation-system/src/index.js
const express = require('express');
const summaryRoutes = require('./routes/summaryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', summaryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

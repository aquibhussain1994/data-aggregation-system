# Part 1: Data Aggregation System
## Overview

This project is a Data Aggregation System that retrieves information from a MySQL database and provides summarized data through an API endpoint.

## Project Structure

data-aggregation-system
src
  index.js
controllers
  summaryController.js
models
    studentModel.js
    teacherModel.js
    classModel.js
routes
    summaryRoutes.js
config
    dbConfig.js
package.json


## Setup

1. Install Node.js and npm.

2. Clone or download the project.

3. Navigate to the project directory:

   
cd data-aggregation-system
Install dependencies:


npm install
Configure MySQL connection in src/config/dbConfig.js.

Run the project:

node src/index.js

API Endpoints
GET /api/summary: Retrieves aggregated data such as total number of students, average age, and number of classes offered.


















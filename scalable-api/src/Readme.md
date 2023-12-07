### Part 3: Basic API with Scalability Considerations

# Scalable API

## Overview

This project is a basic RESTful API for user data operations with scalability considerations.

## Project Structure

scalable-api
src
 index.js
controllers
 studentController.js
models
 studentModel.js
routes
 studentRoutes.js
config
 dbConfig.js
views
 public  
   addStudent.html
     listStudent.html
      deleteStudent.html
       getStudent.html
        updateStudent.html
package.json
README.md


## Setup

1. Install Node.js and npm.

2. Clone or download the project.

3. Navigate to the project directory:

   cd scalable-api
Install dependencies:


npm install
Configure MySQL connection in src/config/dbConfig.js.

Run the project:
node src/index.js

open browser:
http://localhost:3000/addStudent.html
http://localhost:3000/deleteStudent.html
http://localhost:3000/updateStudent.html
http://localhost:3000/listStudent.html
http://localhost:3000/addStudent.html
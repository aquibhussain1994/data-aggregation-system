-- Create the schoolSystem database
CREATE DATABASE IF NOT EXISTS schoolSystem;

-- Switch to the schoolSystem database
USE schoolSystem;

-- Teachers Table
CREATE TABLE Teachers (
  ID INT PRIMARY KEY,
  Name VARCHAR(255),
  Subject VARCHAR(50)
) ENGINE=InnoDB;

-- Classes Table
CREATE TABLE Classes (
  ID INT PRIMARY KEY,
  Subject VARCHAR(50),
  TeacherID INT,
  NumberOfStudents INT,
  FOREIGN KEY (TeacherID) REFERENCES Teachers(ID)
) ENGINE=InnoDB;

-- Students Table
CREATE TABLE Students (
  ID INT PRIMARY KEY,
  Name VARCHAR(255),
  Age INT,
  Grade VARCHAR(10),
  ClassID INT,
  FOREIGN KEY (ClassID) REFERENCES Classes(ID)
) ENGINE=InnoDB; 




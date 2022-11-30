DROP DATABASE IF EXISTS Zoo;
CREATE SCHEMA Zoo;
USE Zoo;

CREATE TABLE Managers(
  id INT PRIMARY KEY AUTO_INCREMENT,
  manager VARCHAR(50) NOT NULL
);

CREATE TABLE Animals(
  id INT PRIMARY KEY AUTO_INCREMENT,
  animal VARCHAR(50) NOT NULL,
  species VARCHAR(50) NOT NULL,
  sex VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  localization VARCHAR(50) NOT NULL
);

CREATE TABLE Caregivers(
  id INT PRIMARY KEY AUTO_INCREMENT,
  caregiver VARCHAR(50) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES Managers(id)
);

CREATE TABLE Caregiver_animal(
  animal_id INT NOT NULL,
  caregiver_id INT NOT NULL,
  CONSTRAINT PRIMARY KEY(animal_id, caregiver_id),
  FOREIGN KEY (animal_id) REFERENCES Animals(id),
  FOREIGN KEY (caregivers_id) REFERENCES Caregivers(id)
);
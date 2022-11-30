DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;
USE normalization;

CREATE TABLE Employees(
  id INT PRIMARY KEY NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  cell_contact VARCHAR(100) NOT NULL,
  date_register DATETIME NOT NULL
) engine=InnoDB;

CREATE TABLE Sectors(
  id INT PRIMARY KEY NOT NULL,
  sector_name VARCHAR(100)
) engine=InnoDB;

CREATE TABLE Sector_employee(
  employee_id INT NOT NULL,
  sector_id INT NOT NULL,
  FOREIGN KEY (employee_id) REFERENCES Employees(id),
  FOREIGN KEY (sector_id) REFERENCES Sectors(id)
) engine=InnoDB;

INSERT INTO Employees(id, first_name, last_name, email, cell_contact, date_register)
VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
  (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
  (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
  (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO Sectors(id, sector_name)
VALUES(1, 'Administração'),
  (2, 'Vendas'),
  (3, 'Operacional'),
  (4, 'Estratégico'),
  (5, 'Marketing');

INSERT INTO Sector_employee(employee_id, sector_id)
VALUES(12, 1),
  (12, 2),
  (13, 3),
  (14, 4),
  (14, 2),
  (15, 5);

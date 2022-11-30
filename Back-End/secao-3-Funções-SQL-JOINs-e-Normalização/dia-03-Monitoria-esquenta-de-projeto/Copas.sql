DROP SCHEMA IF EXISTS Copas;
CREATE SCHEMA Copas;
USE Copas;

CREATE TABLE Pais_campeao(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pais VARCHAR(50)
) engine=InnoDB;

CREATE TABLE Pais_vice(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pais VARCHAR(50)
) engine=InnoDB;

CREATE TABLE Pais_sede(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pais VARCHAR(50)
) engine=InnoDB;

CREATE TABLE Campeao(
  id INT PRIMARY KEY AUTO_INCREMENT,
  ano INT NOT NULL,
  campeao_id INT NOT NULL,
  FOREIGN KEY (campeao_id) REFERENCES Pais_campeao(id)
) engine=InnoDB;

CREATE TABLE Vice(
  id INT PRIMARY KEY AUTO_INCREMENT,
  ano INT NOT NULL,
  vice_id INT NOT NULL,
  FOREIGN KEY (vice_id) REFERENCES Pais_vice(id)
) engine=InnoDB;

CREATE TABLE Sede(
  id INT PRIMARY KEY AUTO_INCREMENT,
  ano INT NOT NULL,
  sede_id INT NOT NULL,
  FOREIGN KEY (sede_id) REFERENCES Pais_sede(id)
) engine=InnoDB;

CREATE TABLE Copas(
	campeao_id INT NOT NULL,
  vice_id INT NOT NULL,
  sede_id INT NOT NULL,
  ano INT NOT NULL,
  CONSTRAINT PRIMARY KEY(campeao_id, vice_id, sede_id),
  FOREIGN KEY (campeao_id) REFERENCES Pais_campeao(id),
  FOREIGN KEY (vice_id) REFERENCES Pais_vice(id),
  FOREIGN KEY (sede_id) REFERENCES Pais_sede(id)
) engine=innoDB;

INSERT INTO Pais_campeao(id, pais)
VALUES(1, 'Brasil'),
(2, 'Italia'),
(3, 'Alemanha Ocidental'),
(4, 'Argentina'),
(5, 'Uruguai'),
(6, 'França'),
(7, 'Espanha'),
(8, 'Inglaterra');

INSERT INTO Pais_vice(id, pais)
VALUES(1, 'Argentina'),
(2, 'Tchecoslovaquia'),
(3, 'Hungria'),
(4, 'Brasil'),
(5, 'Suécia'),
(6, 'Alemanha Ocidental'),
(7, 'Italia'),
(8, 'Holanda'),
(9, 'Alemanha'),
(10, 'França'),
(11, 'Croácia');

INSERT INTO Pais_sede(id, pais)
VALUES(1, 'Uruguai'),
(2, 'Italia'),
(3, 'França'),
(4, 'Brasil'),
(5, 'Suiça'),
(6, 'Suécia'),
(7, 'Chile'),
(8, 'Inglaterra'),
(9, 'México'),
(10, 'Alemanha Ocidental'),
(11, 'Argentina'),
(12, 'Espanha'),
(13, 'EUA'),
(14, 'Coreia do Sul e Japão'),
(15, 'Alemanha'),
(16, 'África do Sul'),
(17, 'Russia'),
(18, 'Qatar');

INSERT INTO Campeao(campeao_id, ano)
VALUES(5, 1930),
(2, 1934),
(2, 1938),
(5, 1950),
(3, 1954),
(1, 1958),
(1, 1962),
(8, 1966),
(1, 1970),
(3, 1974),
(4, 1978),
(2, 1982),
(4, 1986),
(3, 1990),
(1, 1994),
(6, 1998),
(1, 2002),
(2, 2006),
(7, 2010),
(3, 2014),
(6, 2018);

INSERT INTO Vice(vice_id, ano)
VALUES(1, 1930),
(2, 1934),
(3, 1938),
(4, 1950),
(3, 1954),
(5, 1958),
(2, 1962),
(6, 1966),
(7, 1970),
(8, 1974),
(8, 1978),
(6, 1982),
(6, 1986),
(1, 1990),
(7, 1994),
(4, 1998),
(9, 2002),
(10, 2006),
(8, 2010),
(1, 2014),
(11, 2018);

INSERT INTO Sede(sede_id, ano)
VALUES(1, 1930),
(2, 1934),
(3, 1938),
(4, 1950),
(5, 1954),
(6, 1958),
(7, 1962),
(8, 1966),
(9, 1970),
(10, 1974),
(11, 1978),
(12, 1982),
(9, 1986),
(2, 1990),
(13, 1994),
(3, 1998),
(14, 2002),
(15, 2006),
(16, 2010),
(4, 2014),
(17, 2018),
(18, 2022);

INSERT INTO Copas(campeao_id, vice_id, sede_id, ano)
VALUES(5, 1, 1, 1930),
(2, 2, 2, 1934),
(2, 3, 3, 1938),
(5, 4, 4, 1950),
(3, 3, 5, 1954),
(1, 5, 6, 1958),
(1, 2, 7, 1962),
(8, 6, 8, 1966),
(1, 7, 9, 1970),
(3, 8, 10, 1974),
(4, 8, 11, 1978),
(2, 6, 12, 1982),
(4, 6, 9, 1986),
(3, 1, 2, 1990),
(1, 7, 13, 1994),
(6, 4, 3, 1998),
(1, 9, 14, 2002),
(2, 10, 15, 2006),
(7, 8, 16, 2010),
(3, 1, 4, 2014),
(6, 11, 17, 2018);
-- (NULL, NULL, 18, 2022);

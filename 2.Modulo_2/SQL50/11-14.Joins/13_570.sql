-- 570. Managers with at Least 5 Direct Reports
-- https://leetcode.com/problems/managers-with-at-least-5-direct-reports/

/*
Escriba una consulta SQL para obtener un informe de los directivos con al menos cinco subordinados directos.

Devuelva la tabla de resultados en cualquier orden.

El formato del resultado de la consulta está en el siguiente ejemplo.
*/
CREATE TABLE IF NOT EXISTS Employee (id INT, name VARCHAR(255), department VARCHAR(255), managerId INT);
TRUNCATE TABLE Employee;
INSERT INTO Employee (id, name, department, managerId) VALUES ('101', 'John', 'A', NULL);
INSERT INTO Employee (id, name, department, managerId) VALUES ('102', 'Dan', 'A', '101');
INSERT INTO Employee (id, name, department, managerId) VALUES ('103', 'James', 'A', '101');
INSERT INTO Employee (id, name, department, managerId) VALUES ('104', 'Amy', 'A', '101');
INSERT INTO Employee (id, name, department, managerId) VALUES ('105', 'Anne', 'A', '101');
INSERT INTO Employee (id, name, department, managerId) VALUES ('106', 'Ron', 'B', '101');


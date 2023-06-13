-- 1934. Confirmation Rate
-- https://leetcode.com/problems/confirmation-rate/

/*
La tasa de confirmación de un usuario es el número de mensajes "confirmados" dividido por el número total de mensajes de confirmación solicitados. La tasa de confirmación de un usuario que no solicitó ningún mensaje de confirmación es 0. Redondee la tasa de confirmación a dos decimales.

Escribe una consulta SQL para obtener el porcentaje de confirmación de cada usuario.

Devuelva la tabla de resultados en cualquier orden.

El formato del resultado de la consulta está en el siguiente ejemplo.
*/
CREATE TABLE IF NOT EXISTS Signups (user_id INT, time_stamp DATEtime);
CREATE TABLE IF NOT EXISTS Confirmations (user_id INT, time_stamp DATEtime, action ENUM('confirmed','timeout'));
TRUNCATE TABLE Signups;
INSERT INTO Signups (user_id, time_stamp) VALUES ('3', '2020-03-21 10:16:13');
INSERT INTO Signups (user_id, time_stamp) VALUES ('7', '2020-01-04 13:57:59');
INSERT INTO Signups (user_id, time_stamp) VALUES ('2', '2020-07-29 23:09:44');
INSERT INTO Signups (user_id, time_stamp) VALUES ('6', '2020-12-09 10:39:37');
TRUNCATE TABLE Confirmations;
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES ('3', '2021-01-06 03:30:46', 'timeout');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES ('3', '2021-07-14 14:00:00', 'timeout');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES ('7', '2021-06-12 11:57:29', 'confirmed');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES ('7', '2021-06-13 12:58:28', 'confirmed');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES ('7', '2021-06-14 13:59:27', 'confirmed');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES ('2', '2021-01-22 00:00:00', 'confirmed');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES ('2', '2021-02-28 23:59:59', 'timeout');
-- 1. Contar el número de usuarios por marca de teléfono
SELECT marca, COUNT(*) FROM tblUsuarios GROUP BY marca;
-- 2. Listar nombre y teléfono de los usuarios con teléfono que no sea de la marca LG
SELECT nombre, telefono, marca FROM tblUsuarios WHERE marca != "LG";
-- 3. Listar las diferentes compañias en orden alfabético ascendentemente
SELECT DISTINCT compañia FROM tblUsuarios GROUP BY compañia ORDER BY compañia ASC;
-- 4. Calcular la suma de los saldos de los usuarios de la compañia telefónica UNEFON
SELECT SUM(saldo) FROM tblUsuarios WHERE compañia = "UNEFON";
-- 5. Mostrar el email de los usuarios que usan hotmail
SELECT email FROM tblUsuarios WHERE email LIKE "%hotmail%";
-- 6. Listar los nombres de los usuarios sin saldo o inactivos
SELECT nombre FROM tblUsuarios WHERE saldo = 0 OR activo = 0;
-- Listar el login y teléfono de los usuarios con compañia telefónicaIUSACELL o TELCEL
-- Listar las diferentes marcas de celular en orden alfabético ascendentemente
-- Listar las diferentes marcas de celular en orden alfabético aleatorio
-- Listar el login y teléfono de los usuarios con compañia telefónica IUSACELL o UNEFON
-- Listar nombre y teléfono de los usuarios con teléfono que no sea de la marca MOTOROLA o NOKIA
-- Calcular la suma de los saldos de los usuarios de la compañia telefónica TELCEL
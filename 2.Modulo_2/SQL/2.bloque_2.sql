-- https://parzibyte.me/blog/2018/02/06/ejercicios-resueltos-consultas-sql-mysql/amp/

-- 1. Listar nombre y teléfono de los usuarios con teléfono que no sea de la marca LG o SAMSUNG
SELECT nombre, telefono, marca 
FROM `tblusuarios` 
WHERE marca NOT IN ("LG", "SAMSUNG");

--SELECT nombre, telefono, marca FROM `tblusuarios` WHERE NOT marca = "LG" AND NOT marca = "SAMSUNG";

-- SELECT nombre, telefono, marca FROM `tblusuarios` WHERE marca != "LG" AND marca != "SAMSUNG";
-- Listar el login y teléfono de los usuarios con compañia telefónica IUSACELL
-- Listar el login y teléfono de los usuarios con compañia telefónica que no sea TELCEL
-- Calcular el saldo promedio de los usuarios que tienen teléfono marca NOKIA
-- Listar el login y teléfono de los usuarios con compañia telefónica IUSACELL o AXEL
-- Mostrar el email de los usuarios que no usan yahoo
-- Listar el login y teléfono de los usuarios con compañia telefónica que no sea TELCEL o IUSACELL
-- Listar el login y teléfono de los usuarios con compañia telefónica UNEFON
-- Listar las diferentes marcas de celular en orden alfabético descendentemente
-- Listar las diferentes compañias en orden alfabético aleatorio
-- Listar el login de los usuarios con nivel 0 o 2
-- Calcular el saldo promedio de los usuarios que tienen teléfono marca LG
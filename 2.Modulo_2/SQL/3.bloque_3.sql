
-- 1. Listar el login de los usuarios con nivel 1 o 3

SELECT nombre, email FROM tblUsuarios WHERE nivel IN (1, 3);

-- 2. Listar nombre y teléfono de los usuarios con teléfono que no sea de la marca BLACKBERRY

SELECT nombre, telefono FROM tblUsuarios WHERE marca NOT IN ("BLACKBERRY");

-- 3. Listar el login de los usuarios con nivel 3

SELECT nombre, email FROM tblUsuarios WHERE nivel = 3;

-- 4. Listar el login de los usuarios con nivel 0

SELECT nombre, email FROM tblUsuarios WHERE nivel = 0;

-- 5. Listar el login de los usuarios con nivel 1

SELECT nombre, email FROM tblUsuarios WHERE nivel = 1;

-- 6. Contar el número de usuarios por sexo

SELECT sexo, COUNT(*) FROM tblUsuarios GROUP BY sexo;

-- Todos los hombres:
SELECT nombre FROM tblUsuarios WHERE sexo = "H";

/*Listar el login y teléfono de los usuarios con compañia telefónica AT&T
Listar las diferentes compañias en orden alfabético descendentemente
Listar el logn de los usuarios inactivos
Listar los números de teléfono sin saldo
Calcular el saldo mínimo de los usuarios de sexo “Hombre”
Listar los números de teléfono con saldo mayor a 300
*/
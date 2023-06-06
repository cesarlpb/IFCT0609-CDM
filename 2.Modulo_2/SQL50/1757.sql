-- Query para crear la tabla del ejercicio
CREATE TABLE IF NOT EXISTS Products (product_id int, low_fats ENUM('Y', 'N'), recyclable ENUM('Y','N'));
TRUNCATE TABLE Products
INSERT INTO Products (product_id, low_fats, recyclable) values ('0', 'Y', 'N');
INSERT INTO Products (product_id, low_fats, recyclable) values ('1', 'Y', 'Y');
INSERT INTO Products (product_id, low_fats, recyclable) values ('2', 'N', 'Y');
INSERT INTO Products (product_id, low_fats, recyclable) values ('3', 'Y', 'Y');
INSERT INTO Products (product_id, low_fats, recyclable) values ('4', 'N', 'N');

-- Ejercicio: Hacer un query que devuelve los ids de los productos que son low_fats ("Y") y son recyclable ("Y")
-- Opción 1 usando AND:
SELECT product_id FROM Products WHERE low_fats = "Y" AND recyclable = "Y";
-- Opción 2 igualando listas: 
SELECT product_id FROM Products WHERE (low_fats, recyclable) = ("Y", "Y");


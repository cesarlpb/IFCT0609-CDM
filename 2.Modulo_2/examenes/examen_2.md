## Preguntas

Todas las preguntas se responden en base a esta tabla [tblUsuarios](./tblusuarios.sql)

### SQL
1. Selección de preguntas de bloques 1 al 4 de SQL

- Bloque 1: [2, 4, 6, 12](../SQL/1.bloque_1.sql):

```sql
-- 2. Calcular el saldo máximo de los usuarios de sexo “Mujer”
-- 4. Contar los usuarios sin saldo o inactivos
-- 6. Listar los números de teléfono con saldo menor o igual a 300
-- 12. Listar nombre y teléfono de los usuarios con teléfono LG, SAMSUNG o MOTOROLA
```

- Bloque 2: [16, 18, 19, 21, 23](../SQL/2.bloque_2.sql):

```sql
-- 16. Calcular el saldo promedio de los usuarios que tienen teléfono marca NOKIA
-- 18. Mostrar el email de los usuarios que no usan yahoo
-- 19. Listar el login y teléfono de los usuarios con compañia telefónica que no sea TELCEL o IUSACELL
-- 21. Listar las diferentes marcas de celular en orden alfabético descendentemente
-- 23. Listar el login de los usuarios con nivel 0 o 2
```

- Bloque 3: [28](../SQL/3.bloque_3.sql):

```sql
-- 4. Listar el login de los usuarios con nivel 0

```

- Bloque 4: [38, 39, 40, 42, 43](../SQL/4.bloque_4.sql):
```sql
-- 38. Listar nombre y teléfono de los usuarios con teléfono que no sea de la marca LG
-- 39. Listar las diferentes compañias en orden alfabético ascendentemente
-- 40. Calcular la suma de los saldos de los usuarios de la compañia telefónica UNEFON
-- 42. Listar los nombres de los usuarios sin saldo o inactivos
-- 43. Listar el login y teléfono de los usuarios con compañia telefónica IUSACELL o TELCEL
```

### Node
1. `GET` de lista: todos los usuarios de la tabla. Se devuelven 10 usuarios a la vez. Ordenados por id creciente. Todas las columnas. Si no hay usuarios, array vacío.
```sql
  SELECT * FROM tblUsuarios LIMIT 10;
```
2. `GET` de un objeto: se indica el id. Todas las columnas. En caso de que no exista ese id, objeto vacío.
```sql
  SELECT * FROM tblUsuarios WHERE id = ?;
```
3. `POST` de un usuario por id. Recibimos todas la columnas y creamos usuario. Si falta alguna columna que no sea el id -> `Bad request`.
```sql
  INSERT INTO tblUsuario ?, ?, ? VALUES( ?, ?, ? ) WHERE idx = ?;
```
4. `PUT` por id para editar un campo. Si no existe el id, error. Se admite objeto parcial, es decir, que no me pasen todas las columnas. El campo que me indican debe existir, sino, `Bad Request`. 
5. `DELETE` por id: me indican un id y si existe se borra. En caso de borrarlo, devolvemos confirmación de que se ha borrado `"El id 1 ha sido borrado"`. Si no existe el id, se devuelve objeto vacío. Si el id no es un id válido, `Bad Request`.

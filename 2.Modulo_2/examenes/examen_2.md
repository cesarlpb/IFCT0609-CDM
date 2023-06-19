## Preguntas

Todas las preguntas se responden en base a esta tabla [tblUsuarios](./tblusuarios.sql)

### SQL
1. Selección de preguntas de bloques 1 al 4 de SQL


### Node
1. `GET` de lista: todos los usuarios de la tabla. Se devuelven 10 usuarios a la vez. Ordenados por id creciente. Todas las columnas.
2. `GET` de un objeto: se indica el id. Todas las columnas. En caso de que no exista ese id, objeto vacío.
3. `POST` de un usuario por id. Recibimos todas la columnas y creamos usuario. Si falta alguna columna que no sea el id -> `Bad request`.
4. `PUT` por id para editar un campo. Si no existe el id, error. Se admite objeto parcial, es decir, que no me pasen todas las columnas. El campo que me indican debe existir, sino, `Bad Request`. 
5. `DELETE` por id: me indican un id y si existe se borra. En caso de borrarlo, devolvemos confirmación de que se ha borrado `"El id 1 ha sido borrado"`. Si no existe el id, se devuelve objeto vacío. Si el id no es un id válido, `Bad Request`.

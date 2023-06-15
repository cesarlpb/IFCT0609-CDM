# Subastas

- Fuente: [Subastas](https://subastas.boe.es)
- Ejemplo: [Alertas Subastas](https://alertasubastas.com)

## Scrapping
El proyecto de scrapping de datos está en [scrapper](./scrapper/)

## Cliente
El proyecto de cliente está en [client](./client)

## Servidor
El proyecto de cliente está en [client](./servidor)

## Cómo iniciar el proyecto

- Servidor: abre un terminal en la carpeta `servidor` y ejecuta:
```
node server.js
```
- Cliente: abre el archivo `index.html` en la carpeta `client`.
- Scrapper (solo para obtener nuevos datos):
  - Introducir una url en `scrapper.js`
  - Ejecutar: `node scrapper.js` 

**Nota:** En `server` y `scrapper` hay que bajarse las dependencias con `npm install`

---

## Objeto Subasta

```javascript
  subastaId:  'SUB-JA-2023-209686',
  ubicacion: 'JUZGADO MERCANTIL 3 - MADRID',
  expedienteId: '0549/14',
  estado: 'Celebrándose - [Conclusión prevista: 03/07/2023 a las 18:00:00]',     
  descripcion: 'Subasta con varios lotes. Lote 1: DOSCIENTOS.- Vivienda dúplex Tipo "M", en dos plantas unidas ambas por una escalera interior y distribuidas en varias dependencias. Tiene su acceso a través de una escalera exterior que arranca de la planta baja, ubicada en el bloque II de la primera...'
```

[VARCHAR vs TEXT](https://stackoverflow.com/questions/25300821/difference-between-varchar-and-text-in-mysql) -> spoiler: ambos pueden guardar 65535 caracteres pero `VARCHAR` es flexible según el tamaño del string.
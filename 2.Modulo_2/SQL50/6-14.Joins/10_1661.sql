-- 1661. Average Time of Process per Machine
-- https://leetcode.com/problems/average-time-of-process-per-machine

/*
Hay un sitio web de una fábrica que tiene varias máquinas, cada una ejecutando el mismo número de procesos. Escribe una consulta SQL para encontrar el tiempo medio que tarda cada máquina en completar un proceso.

El tiempo para completar un proceso es la marca de tiempo 'fin' menos la marca de tiempo 'inicio'. El tiempo medio se calcula dividiendo el tiempo total para completar cada proceso en la máquina por el número de procesos que se ejecutaron.

La tabla resultante debe tener el id_máquina junto con el tiempo medio como tiempo_proceso, que debe redondearse a 3 decimales.

Devuelve la tabla de resultados en cualquier orden.

El formato del resultado de la consulta está en el siguiente ejemplo.
*/
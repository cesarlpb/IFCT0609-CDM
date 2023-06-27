/*
Escribe el código de una función intercalar() que deberá crear un nuevo elemento div, con una class de nombre destacar. El bloque contendrá, en negrita, el texto Página Modelo. Este bloque debe aparecer justo antes del bloque subtitulo es decir justo después del titular de la página. Se activará con el botón superior que contiene el texto Subtitulo
*/
function intercalar(){
  // Alternativa: Crear todo el elemento con string multilínea, usar DOMParser() para pasarlo a objeto NodeElement (más info: https://davidwalsh.name/convert-html-stings-dom-nodes) y usar insertAdjacentHTML(...)
  let header = document.querySelector("header");
  let div = document.createElement("div", );
  div.setAttribute("id", "div-intercalado");
  let strong = document.createElement("strong");
  strong.innerText = "Página Modelo";
  div.appendChild(strong);
  header.insertAdjacentElement("afterend", div);
} 
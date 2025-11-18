// Ejercicio 13 - Seleccionar el último <p> y eliminarlo del DOM
// Autor : Aleyda Quispe
var parrafos = document.querySelectorAll("P");
var ultimoParrafo = parrafos[parrafos.length - 1];
ultimoParrafo.remove();
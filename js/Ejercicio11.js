// Ejercicio 11 - Clonar un párrafo y agregarlo al final del body
// Autor : Aleyda Quispe

var parrafo = document.querySelector("#parrafoOriginal");
var clonParrafo = parrafo.cloneNode(true);
document.body.appendChild(clonParrafo);
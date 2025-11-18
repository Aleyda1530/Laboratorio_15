// Ejercicio 19 - Contar divs y mostrar resultado en un <p> creado dinámicamente
// Autor : Aleyda Quispe

var divs = document.querySelectorAll("div");
var cantidad = divs.length;
var nuevoParrafo = document.createElement("p");

nuevoParrafo.textContent = "La cantidad de divs en el documento es: " + cantidad;

document.body.appendChild(nuevoParrafo);
// Ejercicio 15 - Clonar un <article> y agregarlo al final del <main>
// Autor : Aleyda Quispe

var articulo = document.querySelector("article");
var clon = articulo.cloneNode(true); 
var main = document.querySelector("main");
main.appendChild(clon);
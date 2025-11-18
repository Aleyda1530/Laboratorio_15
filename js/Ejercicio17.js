// Ejercicio 17 - Reordenar alfabéticamente los <p> dentro de un contenedor
// Autor : Aleyda Quispe

var contenedor = document.getElementById("contenedor");
var parrafos = contenedor.querySelectorAll("p");
var arrayParrafos = Array.from(parrafos);

arrayParrafos.sort(function(a, b){
    return a.textContent.localeCompare(b.textContent);
})

for (var parrafo of arrayParrafos){
    contenedor.appendChild(parrafo);
}
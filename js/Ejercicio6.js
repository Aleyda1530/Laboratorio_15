// Ejercicio 6 - Agregar clase "resaltado" a todos los <li> y quitar "oculto"
// Autor : Aleyda Quispe

var items = document.querySelectorAll("li");

for (var i = 0; i < items.length; i++) {
    items[i].classList.add("resaltado");
    items[i].classList.remove("oculto");
}
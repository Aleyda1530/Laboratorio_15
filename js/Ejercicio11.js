// Ejercicio 11 - Crear un <ul> y agregar 5 <li>, luego insertar la lista dentro de un <section> existente
// Autor : Aleyda Quispe

var lista = document.createElement("ul");
for(var i = 0; i < 5; i++){
    var li = document.createElement("li");
    li.textContent = "Elemento " + (i+1);
    lista.appendChild(li);
}
var seccion = document.getElementById("seccionExistente");
seccion.appendChild(lista);

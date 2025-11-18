/**
 Ejercicio 22: Crear un nuevo h2, agregar un p
 una lista con 3 itemes y eliminar el h2 original
 */
// Autor: Aleyda Quispe

let seccion = document.getElementById("seccion");

let nuevoh2 = document.createElement("h2");
nuevoh2.textContent = "Titulo nuevo";
seccion.appendChild(nuevoh2);

let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Descripción generada";
seccion.appendChild(nuevoParrafo);

let lista = document.createElement("ul");
for(let i = 0; i < 3; i++){
    let item = document.createElement("li");
    item.textContent = "Elemento " + (i+1);
    lista.appendChild(item);
}
seccion.appendChild(lista);

let h2Inicial = seccion.querySelector("h2");
h2Inicial.remove();
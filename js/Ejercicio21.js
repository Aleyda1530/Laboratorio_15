/* Ejercicio 21: Crear 3 <p> dentro de un div 
 y eliminar el segungo */
// Autor: Aleyda Quispe

let contenedor = document.getElementById("contenedor");
for (let i = 0; i < 3; i++){
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Párrafo N° " + (i+1);
    contenedor.appendChild(nuevoParrafo);
}
let segundoParrafo = contenedor.children[1];
segundoParrafo.remove();
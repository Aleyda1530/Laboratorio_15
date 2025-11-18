// Ejercicio 10 - Insertar un <h3> antes del primer <p>
// Autor : Aleyda Quispe

var primerParrafo = document.querySelector("p");
var nuevoh3 = document.createElement("h3");
nuevoh3.textContent = "Holaa este es el nuevo titulo h3";
document.body.insertBefore(nuevoh3, primerParrafo);

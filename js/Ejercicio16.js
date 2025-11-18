// Ejercicio 16 - Mover el último <li> al inicio del primer <ul>
// Autor : Aleyda Quispe

var lista = document.querySelector("ul");
var ultimoLi = lista.lastElementChild;
lista.insertBefore(ultimoLi, lista.firstElementChild);
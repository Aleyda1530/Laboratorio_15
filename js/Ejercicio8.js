/* Ejercicio 8 - Cambiar color de fondo de cada 
<div> usando un array de colores*/
// Autor : Aleyda Quispe

var cajas = document.querySelectorAll("div");
var colores = ["lightblue", "yellow", "lightpink", "cyan"]
for (var i = 0; i < cajas.length; i++) {
    cajas[i].style.backgroundColor = colores[i];
}
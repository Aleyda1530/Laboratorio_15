// Ejercicio 18 - Agregar data-index a cada <section>
// Autor : Aleyda Quispe

var secciones = document.querySelectorAll("section");
for (var i = 0; i < secciones.length; i++){
    secciones[i].setAttribute("data-index" , i);
}
console.log(secciones);
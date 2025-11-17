// Ejercicio 7 - Mostrar el texto de cada <li> de un <ul> seleccionado por id
// Autor : Aleyda Quispe
var lista = document.getElementById("listaCursos");
var items = lista.children;
for (var item of items) {
    console.log(item.textContent);
}
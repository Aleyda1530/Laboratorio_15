// Ejercicio 4 - Actualizar el contenido de todos los párrafos <p>
// Autor : Aleyda Quispe

var parrafos = document.querySelectorAll("p");
for (var i = 0; i < parrafos.length; i++){
    parrafos[i].textContent = "Texto actualizado dinamicamente";
}

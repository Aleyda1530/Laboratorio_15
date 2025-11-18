// Ejercicio 12 - Reemplazar un <p> por un nuevo <div>
// Autor : Aleyda Quispe

var parrafo = document.getElementById("parrafoAReemplazar");
var nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado";
document.body.replaceChild(nuevoDiv, parrafo);

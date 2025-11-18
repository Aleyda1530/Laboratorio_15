/* Ejercicio 20: Crear dinamicamente un <ul> con <li> y 
dentro de cada <li> un <span>
 */
// Autor Aleyda Quispe

let lista = document.createElement("ul");
for (let i = 0; i < 5; i++){
    let itemLista = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = "Nivel interno" + (i+1);
    itemLista.appendChild(span);
    lista.appendChild(itemLista);
}
document.body.appendChild(lista);
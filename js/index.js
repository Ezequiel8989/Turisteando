// se importa destinos al index.
import destinos from "./destinos.js";

//funcion para retonar el HTML de una card
function retornarCardHTML(destino) {
    return `<div class="card">
    
    <img src="${destino.imagen}" alt="${destino.nombre}"></div>
    <div class="card-name">${destino.nombre}</div>
    <div class="card-price">${destino.precio}</div>
    <div class="card-button">
    <button class="button button-outline button-add" id="${destino.id}" title="Click para elegir destino">+</button>
    </div>
    </div>`
}

//funcion para cargar los productos en la pagina
function CargarDestinos(array) {
    const container = document.querySelector('.container')
    array.forEach( destinos => {
        const cardHTML = retornarCardHTML(destinos);
        container.innerHTML += cardHTML;
    });
}

//llamar a la funcion para cargar datos en la pagina
CargarDestinos(destinos);
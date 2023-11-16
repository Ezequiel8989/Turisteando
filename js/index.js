// se importa destinos al index.
import pantallaDestino from "./formulario.js";
import destinos from "./destinos.js";


var destino = "";

//funcion para retonar el HTML de una card
function retornarCardHTML(destino) {
    return `<div class=" card">
        <img src="${destino.imagen}" alt="${destino.nombre}"></div>
        <div class=" card-price">${destino.precio}</div>
        <div class=" card-name">${destino.nombre}</div>
        <div class=" card-button">
        <button class=" button button-outline button-add" id="${destino.id}" onclick="location.href='formulario.html' title="Click para elegir destino">Elegir</button>
        </div>
        </div>
    </div>`
}

function cargarPantallaDestino(destino) {
    location.href = 'formulario.html';
    pantallaDestino.destinoPrueba = destino;
    pantallaDestino.recuperarDestino();
}

//funcion para cargar los destinos en la pagina
function CargarDestinos(array) {
    const container = document.querySelector('.container')
    array.forEach(destinos => {
        const cardHTML = retornarCardHTML(destinos);
        container.innerHTML += cardHTML;
    });
}

const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add');
    if (botonesAgregar) {
        for (const boton of botonesAgregar) {
            boton.addEventListener('click', (event) => {
                cargarPantallaDestino(event.target.id-1);
            });
        }
    }
};

//llamar a la funcion para cargar datos en la pagina
CargarDestinos(destinos);
activarClickEnBotones();
export default destino;
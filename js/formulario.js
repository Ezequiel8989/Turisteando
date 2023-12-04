// Realiza acciones con los datos (por ejemplo, muestra una alerta)
function recuperarDestino() {
    const destinoGuardado = localStorage.getItem('destinoSeleccionado');
    const destinoSeleccionado = JSON.parse(destinoGuardado);
    
    document.getElementById('destino').value = destinoSeleccionado.nombre;
    document.getElementById('precio').value = destinoSeleccionado.precio;
    
}
//evita que se elija una fecha anterior a la fecha actual
const fechaVueloInput = document.getElementById('fecha_vuelo');
const fechaActual = new Date();

fechaVueloInput.addEventListener('change', () => {
    const fechaSeleccionada = new Date(fechaVueloInput.value);
    if (fechaSeleccionada < fechaActual) {
        alert('La fecha de reserva no puede ser anterior a la fecha actual.');
        fechaVueloInput.value = ''; // Limpia el campo
    }
});

// Obtén una referencia al botón "Finalizar"
const botonFinalizar = document.querySelector('[name="Finalizar"]');

// Agrega el event listener
botonFinalizar.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtén los valores de los campos
    const nombrePasajero = document.getElementById('nombre').value;
    const apellidoPasajero = document.getElementById('apellido').value;
    const ciudadElegida = document.getElementById('destino').value;

    // Crea el mensaje personalizado
    const mensaje = `¡Muchas gracias, ${nombrePasajero} ${apellidoPasajero}, por elegir ${ciudadElegida}! 
    Te llegara a tu email la informacion de la reserva`;

    // Muestra la alerta personalizada
    swal.fire({
        icon: 'success',
        title: mensaje,
        timer: 9000,
        position: 'center'  }).then(() => {
            // Redirige a la página de inicio después de que se cierre la alerta
            window.location.href = 'index.html'; 
    });
});
export default recuperarDestino();
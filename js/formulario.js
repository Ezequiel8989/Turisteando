
// Realiza acciones con los datos (por ejemplo, muestra una alerta)
function recuperarDestino() {
    const destinoGuardado = localStorage.getItem('destinoSeleccionado');
    const destinoSeleccionado = JSON.parse(destinoGuardado);

    document.getElementById('destino').value = destinoSeleccionado.nombre;
    document.getElementById('precio').value = destinoSeleccionado.precio;
}

export default recuperarDestino();

function mostrarImagen(imagenUrl) {
    var contenedorImagen = document.getElementById('contenedorimg');
    contenedorImagen.innerHTML = '';
    var imagen = document.createElement('img');
    imagen.src = imagenUrl;
    imagen.alt = 'Imagen';
    contenedorImagen.appendChild(imagen);
}

document.addEventListener('DOMContentLoaded', function() {
    var cuadro1 = document.getElementById('cuadrito1');
    var cuadro2 = document.getElementById('cuadrito2');
    var cuadro3 = document.getElementById('cuadrito3');

    cuadro1.addEventListener('click', function() {
        mostrarImagen('imgss/kratos.png');
    });
    cuadro2.addEventListener('click', function() {
        mostrarImagen('imgss/atreus.png');
    });
    cuadro3.addEventListener('click', function() {
        mostrarImagen('imgss/mimir.png');
    });
});
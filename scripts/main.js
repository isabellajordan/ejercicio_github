function paginaCargada(){

    var red = document.querySelector('.red');
    var green = document.querySelector('.green');
    var blue = document.querySelector('.blue');

    var boton = document.querySelector('.boton-aplicar');
    var elementoColor = document.querySelector('.elemento-color');
    var inputTexto = document.querySelector('.input-texto');

    function aplicar(){
        //elementoColor.style.backgroundColor = 'rgb('+red.value+','+green.value+','+blue.value+')';
        elementoColor.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
        console.log('hola');
    }
    boton.addEventListener('click', aplicar);

    red.addEventListener('input', aplicar);
    green.addEventListener('input', aplicar);
    blue.addEventListener('input', aplicar);

    function cambiarTexto(){
        elementoColor.innerHTML = inputTexto.value;
    }
    inputTexto.addEventListener('input', cambiarTexto);



    var botonMensaje = document.querySelector('.boton-mensaje');
    var inputMensaje = document.querySelector('.input-mensaje');
    var contenedorMensajes = document.querySelector('.contenedor-mensajes');


    function agregarMensaje(){
        var anterior = contenedorMensajes.innerHTML;
        contenedorMensajes.innerHTML = 
            anterior + '<p class="mensaje">' + inputMensaje.value + '</p>';
        
        var mensajes = document.querySelectorAll('.mensaje');
        function recorrerMensajes(mensajito){
            function eliminarMensaje(){
                //mensajito.parentNode.removeChild(mensajito);
                mensajito.remove();
            }
            mensajito.addEventListener('click', eliminarMensaje);
        }
        mensajes.forEach(recorrerMensajes);

        inputMensaje.value = '';
    }
    botonMensaje.addEventListener('click', agregarMensaje);

}
window.addEventListener('load', paginaCargada);
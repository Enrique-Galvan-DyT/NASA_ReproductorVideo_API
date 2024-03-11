document.addEventListener('DOMContentLoaded', function() {
    //Reproductor de video

    //videojs() es una función proporcionada por la librería Video.js. Toma una lista de elementos DOM (en este caso, todos los elementos con la clase video-js) y los inicializa como reproductores de video. Retorna un objeto que representa los reproductores de video inicializados. 
    //Selecciona todos los elementos del DOM que tienen la clase video-js. 
    var player = videojs(document.querySelector('.video-js'));

});


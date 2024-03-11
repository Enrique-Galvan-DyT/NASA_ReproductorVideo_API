document.addEventListener('DOMContentLoaded', function() {
    //NASA API
    
    document.getElementById('texto').addEventListener('input', function() {
        //Al escribir en el elemento con Id "texto", tomará el valor propio de dicho elemento (el texto escrito vaya)
        buscarContenido(this.value)
    });    
    
    
});

//NASA API
function buscarContenido(texto) {
    var url = 'https://images-api.nasa.gov/search?q=' + encodeURIComponent(texto) + '&media_type=image&page_size=5';
    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            mostrarContenido(data);
        },
        error: function(xhr, status, error) {
            console.error('Error al realizar la solicitud:', error);
        }
    });
}

function mostrarContenido(data) {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar el contenido anterior

    // Verificar si hay resultados
    if (data.collection && data.collection.items && data.collection.items.length > 0) {
        // Iterar sobre los elementos
        data.collection.items.forEach(function(item) {
            // Verificar si es una imagen
            if (item.data[0] && item.data[0].media_type === 'image') {
                resultado.innerHTML += '<img src="' + item.links[0].href + '" alt="' + item.data[0].title + '" style="max-width: 100%;">';
            }
        });
    } else {
        resultado.innerHTML = '<p>No se encontraron resultados.</p>';
    }
}

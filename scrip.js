// creo una funcion el cual tiene la funcion de mostrar la imagen que se suba para analizar
document.getElementById('img').addEventListener('change', function() { //capturo y creo un evento click
    var reader = new FileReader(); //creo una instancia FileReader para leer el archivo
    reader.onload = function(e) { //creo una funcion que que se ejecuta cuando el FileReader termine de leer el archivo
        var img = document.createElement('img'); //creo una etiqueta img
        img.className = ('imagen') //le doy la clase 'imagen' a la etiqueta img creada
        img.src = e.target.result; //establesco el valor src de la imagnen con el resultado de la lectura del archivo de la instancia FileReader
        document.getElementById('mostrar-img').appendChild(img); //capturo el contenedor de la imagen y le agrego el contenido de la variable img, que seria la imagen
    }
    reader.readAsDataURL(this.files[0]); //se inicializa la lectura del archivo subido 
});

// creo una funcion la cual le da un evento click a un boton, el cual eliminara todos los datos obtenidos de la API y la imagen cargada
document.getElementById('limpiar').addEventListener('click', function() { //capturo y creo el evento click
    var imgContainer = document.getElementById('mostrar-img'); //capturo el contenedor de la imagen 
    imgContainer.removeChild(imgContainer.firstChild); //elimino el nodo hijo que tenia el contenedor de la imagen
    document.getElementById('img').value = ''; //restablesco el valor del imput en limpio
    document.getElementById('resultado-clasificacion').innerHTML = "";
});

// hago llamado a la API utilizando XMLHttpRequest y muestro los resultaos devueltos por esta
document.getElementById('estilo-boton').addEventListener('click', function() { // capturo el boton para llamar a la API y le agrego un evento click
    var imgEntrada = document.getElementById('img'); //capturo la imagen que se suba 
    if (imgEntrada.files.length > 0) { //condiciono para que no se ejecute si esta vacia
        var reader = new FileReader(); //creo una instancia FileReader para leer el archivo
        reader.onload = function(e) { //creo una funcion que que se ejecuta cuando el FileReader termine de leer el archivo
            var array = reader.result; //creo una variable y le asigno el resultado de la lectura del archivo
            var xhr = new XMLHttpRequest(); // implemento XMLHttpRequest  para realizar la peticion a la API de custom vision
            xhr.open('POST', 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/edb69521-fde2-4272-9d75-9afb93eeb0ac/classify/iterations/modelo/image', true); //usando el metodo POST hago el llamado a la API
            xhr.setRequestHeader('Prediction-Key', '7575c83fb4fe49798d79be9ddeb66d54'); // implemento la Prediction-Key de mi API 
            xhr.onreadystatechange = function () { //despues de llamada a la API se crea la funccion para mostrar los resultados devueltos
                if (xhr.readyState === 4 && xhr.status === 200) { //establesco los parametros para extraccion de los resultados 
                    var respuestaJson = JSON.parse(xhr.responseText); //guardo los resultados devueltos por la API 
                    var prediccion = respuestaJson.predictions[0]; //
                    var prediccion2 = respuestaJson.predictions[1];
                    var probabilidad = Math.round(prediccion.probability * 100);
                    document.getElementById('resultado-clasificacion').innerText = 'Clase: ' + prediccion.tagName + ', Probabilidad: ' + probabilidad+ '%';
                }
            };

            xhr.send(array);
        }
        reader.readAsArrayBuffer(imgEntrada.files[0]);
    }
});










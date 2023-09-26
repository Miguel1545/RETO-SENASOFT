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

document.getElementById('estilo-boton').addEventListener('click', function() {
    var imginput = document.getElementById('img');
    if (imginput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var array = reader.result;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/edb69521-fde2-4272-9d75-9afb93eeb0ac/classify/iterations/clasificacion/image', true);
            xhr.setRequestHeader('Prediction-Key', '7575c83fb4fe49798d79be9ddeb66d54');
            xhr.setRequestHeader('Content-Type', 'application/octet-stream');
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    var prediction = jsonResponse.predictions[0];
                    document.getElementById('resultado-clasificacion').innerText = 'Tag: ' + prediction.tagName + ', Probability: ' + prediction.probability;
                }
            };
            xhr.send(array);
        }
        reader.readAsArrayBuffer(imginput.files[0]);
    }
});



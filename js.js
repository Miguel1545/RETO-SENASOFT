document.getElementById('img-1').addEventListener('change', function() { //capturo y creo un evento click
    var reader = new FileReader(); //creo una instancia FileReader para leer el archivo
    reader.onload = function(e) { //creo una funcion que que se ejecuta cuando el FileReader termine de leer el archivo
        var img = document.createElement('img'); //creo una etiqueta img
        img.className = ('imagen') //le doy la clase 'imagen' a la etiqueta img creada
        img.src = e.target.result; //establesco el valor src de la imagnen con el resultado de la lectura del archivo de la instancia FileReader
        document.getElementById('padre-img-objeto-1').appendChild(img); //capturo el contenedor de la imagen y le agrego el contenido de la variable img, que seria la imagen
    }
    reader.readAsDataURL(this.files[0]); //se inicializa la lectura del archivo subido 
});

document.getElementById('enviar-objeto-1').addEventListener('click', function() { // capturo el boton para llamar a la API y le agrego un evento click

    var imgEntrada = document.getElementById('img-1'); //capturo la imagen que se suba 
    var urlimagen = document.getElementById('url-imagen-1').value;
    if (imgEntrada.files.length > 0 || urlimagen) { //condiciono para que no se ejecute si esta vacia
        var reader = new FileReader(); //creo una instancia FileReader para leer el archivo
        reader.onload = function(e) { //creo una funcion que que se ejecuta cuando el FileReader termine de leer el archivo
            var lecturaResul = reader.result; //creo una variable y le asigno el resultado de la lectura del archivo
            var api = new XMLHttpRequest(); // implemento XMLHttpRequest  para realizar la peticion a la API de custom vision
            api.open('POST', 'https://retosenasoft-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9b358784-4372-4254-97e2-7c6e765404cc/detect/iterations/Deteccion-objetos/image', true); //usando el metodo POST hago el llamado a la API
            api.setRequestHeader('Prediction-Key', 'a1e89fadf90c4d92bffbba3f0d533b78'); // implemento la Prediction-Key de mi API 
            api.onreadystatechange = function () { //despues de llamada a la API se crea la funccion para mostrar los resultados devueltos
                if (api.readyState === 4 && api.status === 200) { //verificacion si lia solicitud fue exitosa 
                    var respuestaJson = JSON.parse(api.responseText); //guardo los resultados devueltos por la API 
                    var prediccion = respuestaJson.predictions[0]; // Extraigo las predicciones de la respuesta
                    var probabilidad = Math.round(prediccion.probability * 100); //redondeo la probabilidad al entero mas cercano
                    if(probabilidad <= 70){
                        alert("conflicto de deteccion") //si la probabilidad es menor o igual a 60 no detectara nada
                    }else{
                        document.getElementById('resultado-objeto-1').innerText = 'Clase: ' + prediccion.tagName + ', Probabilidad: ' + probabilidad+ '%'; //muestro los resultados en el contenedor con id resultado-clasificacion que es una etiqueta <p>
                    }
                    xhrTraduccion.send(JSON.stringify([{ 'Text': prediccion.tagName }]));
                }
            };
            api.send(lecturaResul); // Envio la solicitud a la API con los datos de la imagen
        }
    }
});
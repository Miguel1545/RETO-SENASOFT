
document.getElementById('img-1').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.createElement('img');
        img.className = ('imagen');
        img.src = e.target.result;
        document.getElementById('padre-img-objeto-1').appendChild(img);
    }
    reader.readAsDataURL(this.files[0]);
});


document.getElementById('eliminar-objeto-1').addEventListener('click', function() {
    document.getElementById('img-1').value = '';
    document.getElementById('resultado-objeto-1').innerHTML = "";
    document.getElementById('url-imagen-1').value = ""
    var imgContainer = document.getElementById('padre-img-objeto-1');
    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild); 
    }
});



document.getElementById('enviar-objeto-1').addEventListener('click', function() {

    var imgEntrada = document.getElementById('img-1');
    var urlimagen = document.getElementById('url-imagen-1').value;
    if (imgEntrada.files.length > 0 || urlimagen) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var lecturaResul = reader.result;
            var api = new XMLHttpRequest();
            api.open('POST', 'https://retosenasoft-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9b358784-4372-4254-97e2-7c6e765404cc/detect/iterations/Deteccion-objetos/image', true);
            api.setRequestHeader('Prediction-Key', 'a1e89fadf90c4d92bffbba3f0d533b78');
            api.onreadystatechange = function () {
                if (api.readyState === 4 && api.status === 200) {
                    var respuestaJson = JSON.parse(api.responseText);
                    var maxPrediccion = respuestaJson.predictions[0];
                    for (var i = 1; i < respuestaJson.predictions.length; i++) {
                        if (respuestaJson.predictions[i].probability > maxPrediccion.probability) {
                            maxPrediccion = respuestaJson.predictions[i];
                        }
                    }
                    var probabilidad = Math.round(maxPrediccion.probability * 100);
                    if (probabilidad > 70) {
                        document.getElementById('resultado-objeto-1').innerText = 'Clase: ' + maxPrediccion.tagName + ', Probabilidad: ' + probabilidad+ '%';
                    }
                }
                console.log(respuestaJson)
            }
            
            api.send(lecturaResul);
        }

        if (urlimagen) {
            fetch(urlimagen)
                .then(response => response.blob())
                .then(blob => {
                    var objectURL = URL.createObjectURL(blob);
                    var imgElement = document.createElement('img');
                    imgElement.className = 'imagen';
                    imgElement.src = objectURL;
                    document.getElementById('padre-img-objeto-1').appendChild(imgElement);
                    reader.readAsArrayBuffer(blob);
                })
                .catch(error => console.error(error));
        } else {
            reader.readAsArrayBuffer(imgEntrada.files[0]);//Inicio la lectura del archivo de la imagen como un ArrayBuffer
        }
       
    }
});


document.getElementById('img-2').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.createElement('img');
        img.className = 'imagen';
        img.src = e.target.result;
        document.getElementById('padre-img-objeto-2').appendChild(img);
    }
    reader.readAsDataURL(this.files[0]);
});

document.getElementById('eliminar-objeto-2').addEventListener('click', function() {
    document.getElementById('img-2').value = '';
    document.getElementById('resultado-objeto-2').innerHTML = "";
    document.getElementById('url-imagen-2').value = ""
    var imgContainer = document.getElementById('padre-img-objeto-2');
    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild); 
    }
});

document.getElementById('enviar-objeto-2').addEventListener('click', function() {
    var imgEntrada = document.getElementById('img-2');
    var urlimagen = document.getElementById('url-imagen-2').value;
    if (imgEntrada.files.length > 0 || urlimagen) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var lecturaResul = reader.result;
            var api = new XMLHttpRequest();
            api.open('POST', 'https://retosenasoft-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9b358784-4372-4254-97e2-7c6e765404cc/detect/iterations/Deteccion-objetos/image', true);
            api.setRequestHeader('Prediction-Key', 'a1e89fadf90c4d92bffbba3f0d533b78');
            api.setRequestHeader('Content-Type', 'application/octet-stream');
            api.onreadystatechange = function () {
                if (api.readyState === 4 && api.status === 200) {
                    var respuestaJson = JSON.parse(api.responseText);
                    var prediccion = respuestaJson.predictions[0];
                    var probabilidad = Math.round(prediccion.probability * 100);
                    if (probabilidad > 70) {
                        document.getElementById('resultado-objeto-2').innerText = 'Clase: ' + prediccion.tagName + ', Probabilidad: ' + probabilidad+ '%';
                    }
                }
                console.log(respuestaJson)
            }
            api.send(lecturaResul);
        }

        if (urlimagen) {
            fetch(urlimagen)
                .then(response => response.blob())
                .then(blob => {
                    var objectURL = URL.createObjectURL(blob);
                    var imgElement = document.createElement('img');
                    imgElement.className = 'imagen';
                    imgElement.src = objectURL;
                    document.getElementById('padre-img-objeto-2').appendChild(imgElement);
                    reader.readAsArrayBuffer(blob);
                })
                .catch(error => console.error(error));
        } else {
            reader.readAsArrayBuffer(imgEntrada.files[0]);//Inicio la lectura del archivo de la imagen como un ArrayBuffer
        }
       
    }
});
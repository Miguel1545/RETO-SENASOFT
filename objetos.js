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
            api.open('POST', 'https://retosenasoft-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9b358784-4372-4254-97e2-7c6e765404cc/detect/iterations/Deteccion-objetos/image');
            api.setRequestHeader('Prediction-Key', 'a1e89fadf90c4d92bffbba3f0d533b78');
            api.onreadystatechange = function () {
                api.onreadystatechange = function () {
                    if (api.readyState === 4 && api.status === 200) {
                        var respuestaJson = JSON.parse(api.responseText);
                        var predicciones = respuestaJson.predictions;
                        var resultadosMostrados = [];
                        predicciones.forEach(function(prediccion) {
                            var probabilidad = Math.round(prediccion.probability * 100);
                            if (probabilidad > 70 && resultadosMostrados.length < 3 && !resultadosMostrados.includes(prediccion.tagName)) {
                                resultadosMostrados.push(prediccion.tagName);
                                document.getElementById('resultado-objeto-1').innerHTML += 'Clase: ' + prediccion.tagName + ', Probabilidad: ' + probabilidad + '%<br>';
                            }
                        });
                    }
                    console.log(respuestaJson)
                }
                console.log(respuestaJson)
            }
            
            api.send(lecturaResul);
        }

        reader.readAsArrayBuffer(imgEntrada.files[0]);//Inicio la lectura del archivo de la imagen como un ArrayBuffer
        
    
    }
});

document.getElementById('img-2').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.createElement('img');
        img.className = ('imagen');
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
            api.open('POST', 'https://retosenasoft-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9b358784-4372-4254-97e2-7c6e765404cc/detect/iterations/Deteccion-objetos/image');
            api.setRequestHeader('Prediction-Key', 'a1e89fadf90c4d92bffbba3f0d533b78');
            api.onreadystatechange = function () {
                api.onreadystatechange = function () {
                    if (api.readyState === 4 && api.status === 200) {
                        var respuestaJson = JSON.parse(api.responseText);
                        var predicciones = respuestaJson.predictions;
                        var resultadosMostrados = [];
                        predicciones.forEach(function(prediccion) {
                            var probabilidad = Math.round(prediccion.probability * 100);
                            if (probabilidad > 70 && resultadosMostrados.length < 3 && !resultadosMostrados.includes(prediccion.tagName)) {
                                resultadosMostrados.push(prediccion.tagName);
                                document.getElementById('resultado-objeto-2').innerHTML += 'Clase: ' + prediccion.tagName + ', Probabilidad: ' + probabilidad + '%<br>';
                            }
                        });
                    }
                    console.log(respuestaJson)
                }
                console.log(respuestaJson)
            }
            
            api.send(lecturaResul);
        }


        reader.readAsArrayBuffer(imgEntrada.files[0]);//Inicio la lectura del archivo de la imagen como un ArrayBuffer
        
       
    }
});

document.getElementById('img-3').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
        var img = document.createElement('img');
        img.className = ('imagen');
        img.src = e.target.result;
        document.getElementById('padre-img-objeto-3').appendChild(img);
    }
    reader.readAsDataURL(this.files[0]);
});

document.getElementById('eliminar-objeto-3').addEventListener('click', function() {
    document.getElementById('img-3').value = '';
    document.getElementById('resultado-objeto-3').innerHTML = "";
    document.getElementById('url-imagen-3').value = ""
    var imgContainer = document.getElementById('padre-img-objeto-3');
    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild); 
    }
});

document.getElementById('enviar-objeto-3').addEventListener('click', function() {

    var imgEntrada = document.getElementById('img-3');
    var urlimagen = document.getElementById('url-imagen-3').value;
    if (imgEntrada.files.length > 0 || urlimagen) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var lecturaResul = reader.result;
            var api = new XMLHttpRequest();
            api.open('POST', 'https://retosenasoft-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9b358784-4372-4254-97e2-7c6e765404cc/detect/iterations/Deteccion-objetos/image');
            api.setRequestHeader('Prediction-Key', 'a1e89fadf90c4d92bffbba3f0d533b78');
            api.onreadystatechange = function () {
                api.onreadystatechange = function () {
                    if (api.readyState === 4 && api.status === 200) {
                        var respuestaJson = JSON.parse(api.responseText);
                        var predicciones = respuestaJson.predictions;
                        var resultadosMostrados = [];
                        predicciones.forEach(function(prediccion) {
                            var probabilidad = Math.round(prediccion.probability * 100);
                            if (probabilidad > 70 && resultadosMostrados.length < 3 && !resultadosMostrados.includes(prediccion.tagName)) {
                                resultadosMostrados.push(prediccion.tagName);
                                document.getElementById('resultado-objeto-3').innerHTML += 'Clase: ' + prediccion.tagName + ', Probabilidad: ' + probabilidad + '%<br>';
                            }
                        });
                    }
                    console.log(respuestaJson)
                }
                console.log(respuestaJson)
            }
            
            api.send(lecturaResul);
        }

        reader.readAsArrayBuffer(imgEntrada.files[0]);//Inicio la lectura del archivo de la imagen como un ArrayBuffer
       
    }
});
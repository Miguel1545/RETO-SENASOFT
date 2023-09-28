document.getElementById('eliminar-rostro-1').addEventListener('click', function() {
    document.getElementById('img-rostro-1').value = '';
    document.getElementById('resultado-rostro-1').innerHTML = "";
    document.getElementById('url-imagen-1-rostro').value = ""
    var canvas = document.getElementById('canvas');
    var dibujo = canvas.getContext('2d');
    dibujo.clearRect(0, 0, canvas.width, canvas.height);

});

document.getElementById('enviar-rostro-1').addEventListener('click', function() {
    var imgEntrada = document.getElementById('img-rostro-1');
    var urlimagen = document.getElementById('url-imagen-1-rostro').value;
    if (imgEntrada.files.length > 0 || urlimagen) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var lecturaResul = reader.result;
            var api = new XMLHttpRequest();
            api.open('POST', 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0be8e408-dd10-467d-b250-ec8c2179d970/detect/iterations/Reconocimiento_facial/image');
            api.setRequestHeader('Prediction-Key', '142ffda02328413a87d9c62a5c401516');
            api.onreadystatechange = function () {
                if (api.readyState === 4 && api.status === 200) {
                    var respuestaJson = JSON.parse(api.responseText);
                    console.log(respuestaJson)
                    var predicciones = respuestaJson.predictions;
                    var resultadosMostrados = [];
                    var img = new Image();
                    img.src = URL.createObjectURL(imgEntrada.files[0]);
                    img.onload = function() {
                        var canvas = document.getElementById('canvas');
                        var dibujo = canvas.getContext('2d');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        dibujo.drawImage(img, 0, 0, img.width, img.height);
                        predicciones.forEach(function(prediccion) {
                            var probabilidad = Math.round(prediccion.probability * 100);
                            if (probabilidad > 70 && resultadosMostrados.length < 3 && !resultadosMostrados.includes(prediccion.tagName)) {
                                resultadosMostrados.push(prediccion.tagName);
                                document.getElementById('resultado-rostro-1').innerHTML = 'Clase: ' + prediccion.tagName;
                            }
                            if (probabilidad > 70){
                                var box = prediccion.boundingBox;
                                dibujo.beginPath();
                                dibujo.rect(box.left * img.width, box.top * img.height, box.width * img.width, box.height * img.height);
                                dibujo.lineWidth = 4;
                                dibujo.strokeStyle = 'red';
                                dibujo.stroke();
                            }
                        });

                    }
                }
            }
            api.send(lecturaResul);
        }
        reader.readAsArrayBuffer(imgEntrada.files[0]);
    }
});

document.getElementById('eliminar-rostro-2').addEventListener('click', function() {
    document.getElementById('img-rostro-2').value = '';
    document.getElementById('resultado-rostro-2').innerHTML = "";
    document.getElementById('url-imagen-2-rostro').value = ""
    var canvas = document.getElementById('canvas-2');
    var dibujo = canvas.getContext('2d');
    dibujo.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('enviar-rostro-2').addEventListener('click', function() {
    var imgEntrada = document.getElementById('img-rostro-2');
    if (imgEntrada.files.length > 0 || urlimagen) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var lecturaResul = reader.result;
            var api = new XMLHttpRequest();
            api.open('POST', 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0be8e408-dd10-467d-b250-ec8c2179d970/detect/iterations/Reconocimiento_facial/image');
            api.setRequestHeader('Prediction-Key', '142ffda02328413a87d9c62a5c401516');
            api.onreadystatechange = function () {
                if (api.readyState === 4 && api.status === 200) {
                    var respuestaJson = JSON.parse(api.responseText);
                    console.log(respuestaJson)
                    var predicciones = respuestaJson.predictions;
                    var resultadosMostrados = [];
                    var img = new Image();
                    img.src = URL.createObjectURL(imgEntrada.files[0]);
                    img.onload = function() {
                        var canvas = document.getElementById('canvas-2');
                        var dibujo = canvas.getContext('2d');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        dibujo.drawImage(img, 0, 0, img.width, img.height);
                        predicciones.forEach(function(prediccion) {
                            var probabilidad = Math.round(prediccion.probability * 100);
                            if (probabilidad > 70 && resultadosMostrados.length < 3 && !resultadosMostrados.includes(prediccion.tagName)) {
                                resultadosMostrados.push(prediccion.tagName);
                                document.getElementById('resultado-rostro-2').innerHTML = 'Clase: ' + prediccion.tagName;
                            }
                            if (probabilidad > 70){
                                var box = prediccion.boundingBox;
                                dibujo.beginPath();
                                dibujo.rect(box.left * img.width, box.top * img.height, box.width * img.width, box.height * img.height);
                                dibujo.lineWidth = 4;
                                dibujo.strokeStyle = 'red';
                                dibujo.stroke();
                            }
                        });

                    }
                }
            }
            api.send(lecturaResul);
        }
        reader.readAsArrayBuffer(imgEntrada.files[0]);
    }
});

document.getElementById('eliminar-rostro-3').addEventListener('click', function() {
    document.getElementById('img-rostro-3').value = '';
    document.getElementById('resultado-rostro-3').innerHTML = "";
    document.getElementById('url-imagen-3-rostro').value = ""
    var canvas = document.getElementById('canvas-3');
    var dibujo = canvas.getContext('2d');
    dibujo.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('enviar-rostro-3').addEventListener('click', function() {
    var imgEntrada = document.getElementById('img-rostro-3');
    if (imgEntrada.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var lecturaResul = reader.result;
            var api = new XMLHttpRequest();
            api.open('POST', 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0be8e408-dd10-467d-b250-ec8c2179d970/detect/iterations/Reconocimiento_facial/image');
            api.setRequestHeader('Prediction-Key', '142ffda02328413a87d9c62a5c401516');
            api.onreadystatechange = function () {
                if (api.readyState === 4 && api.status === 200) {
                    var respuestaJson = JSON.parse(api.responseText);
                    console.log(respuestaJson)
                    var predicciones = respuestaJson.predictions;
                    var resultadosMostrados = [];
                    var img = new Image();
                    img.src = URL.createObjectURL(imgEntrada.files[0]);
                    img.onload = function() {
                        var canvas = document.getElementById('canvas-3');
                        var dibujo = canvas.getContext('2d');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        dibujo.drawImage(img, 0, 0, img.width, img.height);
                        predicciones.forEach(function(prediccion) {
                            var probabilidad = Math.round(prediccion.probability * 100);
                            if (probabilidad > 70 && resultadosMostrados.length < 3 && !resultadosMostrados.includes(prediccion.tagName)) {
                                resultadosMostrados.push(prediccion.tagName);
                                document.getElementById('resultado-rostro-3').innerHTML = 'Clase: ' + prediccion.tagName;
                            }
                            if (probabilidad > 75){
                                var box = prediccion.boundingBox;
                                dibujo.beginPath();
                                dibujo.rect(box.left * img.width, box.top * img.height, box.width * img.width, box.height * img.height);
                                dibujo.lineWidth = 4;
                                dibujo.strokeStyle = 'red';
                                dibujo.stroke();
                            }
                        });

                    }
                }
            }
            api.send(lecturaResul);
        }
        reader.readAsArrayBuffer(imgEntrada.files[0]);
    }
});
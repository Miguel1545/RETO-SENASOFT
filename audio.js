document.getElementById('enviar-texto').addEventListener('click', function() {
    var texto = document.getElementById('entrada-texto').value;
    fetch('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=es&to=en', {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': 'tu_clave_de_suscripcion',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ 'Text': texto }])
    })
    .then(response => response.json())
    .then(data => {
        var textoTraducido = data[0].translations[0].text;
        return fetch('https://eastus.api.cognitive.microsoft.com/sts/v1.0/issuetoken', {
            method: 'POST',
            headers: {
                'Ocp-Apim-Subscription-Key': 'd8f9f20a-164b-4da9-ade3-856c909abd77',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.text())
        .then(token => {
            var audio = document.getElementById('audio');
            audio.src = `https://eastus.tts.speech.microsoft.com/cognitiveservices/v1?text=${encodeURIComponent(textoTraducido)}&language=en-US&format=audio/mp3&voice=MicrosoftServerSpeechTextToSpeechVoice(en-US, Guy24KRUS)`;
            audio.play();
        });
    })
    .catch(error => console.error('Error:', error));
});


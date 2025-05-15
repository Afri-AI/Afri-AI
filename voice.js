function startListening() {
  const transcriptEl = document.getElementById('transcript');
  if (!('webkitSpeechRecognition' in window)) {
    transcriptEl.innerText = 'Sorry, your browser does not support voice input.';
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'am-ET'; // Amharic (can change to 'om-ET' for Oromo)
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = function() {
    transcriptEl.innerText = 'Listening...';
  };

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    transcriptEl.innerText = 'You said: ' + transcript;
  };

  recognition.onerror = function(event) {
    transcriptEl.innerText = 'Error occurred: ' + event.error;
  };

  recognition.start();
}

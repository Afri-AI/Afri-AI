function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  document.getElementById("transcript").innerText = "Listening...";

  recognition.onresult = function(event) {
    const result = event.results[0][0].transcript;
    document.getElementById("transcript").innerText = result.toLowerCase();
    respondToVoice(result.toLowerCase());
  };
}

function respondToVoice(text) {
  let response = "I didn’t understand.";

  if (text.includes("agriculture")) response = "Opening agriculture services.";
  else if (text.includes("health")) response = "Loading health assistant.";
  else if (text.includes("education")) response = "Redirecting to education section.";
  else if (text.includes("Amharic")) response = "Amharic language selected.";
  else if (text.includes("Oromo")) response = "Oromo support coming soon.";
  else if (text.includes("register") || text.includes("sign up")) response = "Please fill the form below.";

  document.getElementById("response").innerText = response;
}
// Browser-based speech recognition for issuing commands
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

    document.getElementById("commandInput").value = transcript;
});

function startListening() {
    recognition.start();
}

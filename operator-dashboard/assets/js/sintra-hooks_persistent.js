
// === Sintra Persistent Module w/ LocalStorage ===
const Sintra = {
    memory: [],

    loadMemory: function() {
        const saved = localStorage.getItem('sintraMemory');
        if (saved) {
            this.memory = JSON.parse(saved);
            console.log('[Sintra] Memory loaded:', this.memory);
        }
    },

    saveMemory: function() {
        localStorage.setItem('sintraMemory', JSON.stringify(this.memory));
        console.log('[Sintra] Memory saved.');
    },

    logTask: function(prompt, response) {
        const entry = { prompt, response, timestamp: new Date().toISOString() };
        this.memory.push(entry);
        this.saveMemory();
        console.log("[Sintra Log]", entry);
    },

    speak: function(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.05;
        utterance.pitch = 1;
        utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
        speechSynthesis.speak(utterance);
    },
    showMemory:  function() {
        const output = document.getElementById('memory-output');
        output.textContent = JSON.stringify(this.memory, null, 2);
      },    
      clearMemory:  function() {
        this.memory = [];
        localStorage.removeItem('sintraMemory');
        const output = document.getElementById('memory-output');
        output.textContent = 'Memory cleared.';
        console.log('[Sintra] Memory wiped.');
      },
      
    listenAndAct: function() {
        if (!('webkitSpeechRecognition' in window)) {
            alert("Speech recognition not supported.");
            return;
        }

        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = async (event) => {
            const command = event.results[0][0].transcript;
            document.getElementById('command').value = command;
            const result = await Sintra.executeCommand(command);
            Sintra.speak(result);
        };

        recognition.onerror = (event) => {
            console.error("Sintra error:", event.error);
        };

        recognition.start();
    },

    executeCommand: async function(command) {
        const resBox = document.getElementById('response');
        resBox.innerText = "Sintra is processing...";
        try {
            const response = await fetch("http://localhost:5000/ask-sintra", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: command })
            });
            const result = await response.text();
            Sintra.logTask(command, result);
            resBox.innerHTML = "<pre>" + result + "</pre>";
            return result;
        } catch (err) {
            console.error("Sintra connection failed:", err);
            resBox.innerText = "Sintra failed to respond.";
            return "Error: Could not complete the command.";
        }
    }
};

window.Sintra = Sintra;
window.addEventListener('DOMContentLoaded', () => Sintra.loadMemory());

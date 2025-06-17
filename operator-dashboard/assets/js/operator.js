
async function sendCommand() {
    const input = document.getElementById('command').value;
    const responseBox = document.getElementById('response');
    responseBox.innerHTML = "Processing...";

    const response = await fetch("http://localhost:5000/ask-sintra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input })
    });

    const result = await response.text();
    responseBox.innerHTML = "<pre>" + result + "</pre>";
}

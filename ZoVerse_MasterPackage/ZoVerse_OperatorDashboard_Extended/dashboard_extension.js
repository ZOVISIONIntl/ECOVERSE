// Link AI automations to Operator UI
function notarizeDoc(content) {
    fetch('/notarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ document: content })
    }).then(res => res.json()).then(data => {
        console.log("Notarized:", data);
    });
}

function registerIP(title, creator, type, date_created) {
    fetch('/register-ip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, creator, type, date_created })
    }).then(res => res.json()).then(data => {
        console.log("IP Registered:", data);
    });
}

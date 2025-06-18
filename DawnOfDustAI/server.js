//const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());

const dawnProfile = JSON.parse(fs.readFileSync('./dawn_profile.json', 'utf8'));

function generateIntro(profile) {
  return `
You are ${profile.name}.
You are ${profile.tone}.
Your purpose is: ${profile.purpose}

Voice: ${profile.voice}

Your rules are:
${profile.rules.map((rule, i) => `${i + 1}. ${rule}`).join('\n')}

Speak in character at all times.
`;
}

app.post('/ask-dawn', async (req, res) => {
  const prompt = req.body.prompt;

  const intro = generateIntro(dawnProfile);

  try {
    const response = await axios.post('http://localhost:11434/api/generate', {
      model: 'llama3', // or 'mistral' if that’s your choice
      prompt: `${intro}\n\n${prompt}`,
      stream: false
    });

    res.json({ response: response.data.response });
  } catch (error) {
    console.error(error);
    res.status(500).send("Dawn encountered a rupture in the veil.");
  }
});

app.listen(5001, () => {
  console.log('DawnOfDustAI is live at http://localhost:5001');
});
// Node server to run Dawn locally

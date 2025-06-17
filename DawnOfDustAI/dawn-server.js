// dawn-server.js
require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai');

const app = express();
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/ask-dawn', async (req, res) => {
  const userInput = req.body.prompt;
  if (!userInput) return res.status(400).jso   
    if (!userInput) return res.status(400).json({ error: 'Prompt is required.' });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: userInput }]
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Dawn encountered an error:', error);
    res.status(500).json({ error: 'Dawn failed to respond.' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🌅 Dawn of Dust AI is listening at http://localhost:${PORT}`);
});


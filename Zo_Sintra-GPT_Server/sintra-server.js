require("dotenv").config();
console.log("API KEY (loaded):",
process.env.OPENAI_API_KEY?.slice(0,8)
+ "...[hidden]");
const express = require("express");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");

const app = express();
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/ask-sintra", async (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) return res.status(400).send("Missing prompt");

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (err) {
    console.error("Sintra stumbled:", err);
    res.status(500).send("Sintra stumbled");
  }
});

app.listen(5000, () => {
  console.log("🧠 Model in use →", "gpt-3.5-turbo");
  console.log("🔥 Sintra Operator online @ http://localhost:5000 — System listening. Say the word.");
});
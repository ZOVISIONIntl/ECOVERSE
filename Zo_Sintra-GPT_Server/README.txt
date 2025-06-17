
==============================
ZoVerse Operator GPT Backend
==============================

1. Run this server locally with Node.js to power your Operator Dashboard.

2. Install required packages:
   npm install express body-parser dotenv openai

3. Add your OpenAI API key to the `.env` file:
   OPENAI_API_KEY=sk-...

4. Start the server:
   node gpt-server.js

5. Your frontend (Sintra dashboard) should POST to:
   http://localhost:5000/ask-sintra

==============================

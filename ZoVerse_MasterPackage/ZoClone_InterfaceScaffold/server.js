const express = require('express');
const app = express();
const port = 7777;

app.use(express.static('.'));

app.listen(port, () => {
  console.log(`ZoClone Interface running at http://localhost:${port}`);
});

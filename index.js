const express = require('express');
const consola = require('consola');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

(() => {
  app.listen(port, () => {
    consola.success(`Server started on http://localhost:${port}`);
  });
})();

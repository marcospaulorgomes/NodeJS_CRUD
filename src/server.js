const express = require('express');
const routes = require ('./routes');

const app = express();

app.use(express.json()); // Para a aplicação saber lidar com requisições que vem no formato JSON
app.use(routes);

app.listen(3333);
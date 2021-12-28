const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('../api/routes/routes');

const app = express();

// configuração do logger
// app.use(morgan('dev'))
// configuração do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// configuração do cors
app.use(cors());
// configuração de rotas
// app.use('routes', routes)

module.exports = app;
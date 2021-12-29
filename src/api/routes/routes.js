const express = require('express');
const userRouter = require('./user.routes');

// aqui vão as rotas
const routes = express();

routes.use(userRouter);

module.exports = routes;

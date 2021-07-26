'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

// error handlers
const internServerERR = require('./error-handlers/500');
const notFound = require('./error-handlers/404');

// middleWares

const logger = require('./middleware/logger');


// req routers

const foodRouter = require('./route/food');
const clothesRouter = require('./route/clothes');


app.use(express.json());
app.use(logger);
//controllers
const homeController = require('./controller/home.controller');
// EndPoints

app.get('/', homeController);

// routes
app.use('/api/food', foodRouter);
app.use('/api/clothes', clothesRouter);

//call middlewares
app.use('*', notFound);
app.use(internServerERR);

const start = (port) => {
  app.listen(port, () => console.log(`server starts on ${port}`));
};

module.exports = {
  app,
  start,
};

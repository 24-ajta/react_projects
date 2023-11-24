const express = require('express');

const planetsRouter = require('./planets/planets.router');

const api = express.Router(); //get router from express

api.use('/planets',planetsRouter);

module.exports=api; // exporting router
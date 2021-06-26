const express = require('express');
const questionController = require('./controllers/questionController');
const roomController = require('./controllers/roomController');

const routes = express.Router();

routes.get('/', (request, response) => response.render('index', {page:'enter-room'}));
routes.get('/create-pass', (request, response) => response.render('index', {page:'create-pass'}))
routes.get('/room/:room', (request, response) => response.render('room'))

routes.post('/question/:room/:question/:action', questionController.index);
routes.post('/create-room', roomController.create);

module.exports = routes;
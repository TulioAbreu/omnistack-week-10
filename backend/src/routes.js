const { Router } = require('express');
const routes = Router();

const DevControl = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


routes.get('/devs', DevControl.index);
routes.post('/devs', DevControl.store);

routes.get('/search', SearchController.index);

module.exports = routes;
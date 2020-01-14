const express = require('express');
const mongoose = require('mongoose');
const password = require('../secret.js');
const routes = require('./routes.js');

const app = express();

mongoose.connect(password, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log("Success connecting to MongoDBAtlas!");});

app.use(express.json());
app.use(routes);

app.listen(3333);

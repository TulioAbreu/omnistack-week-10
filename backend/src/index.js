const express = require('express');
const mongoose = require('mongoose');
const password = require('../secret.js');
const cors = require('cors');
const http = require('http');
const routes = require('./routes.js');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);
 
mongoose.connect(password, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Success connecting to MongoDBAtlas!");
});

app.use(express.json());
app.use(cors());
app.use(routes);

server.listen(3333);

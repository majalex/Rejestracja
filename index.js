const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const api = require('./api/registrationApi')
var cors = require('cors')

app.use(cors());
app.use(express.json());

// db (models)
require('./models/User')

// routes
app.use('/', apiRouter);

//api
app.use('/api', api)


// server
app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});
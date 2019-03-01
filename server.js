var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/triton-22', { useNewUrlParser: true });

require("./server/config/mongoose.js")
require('./server/config/routes.js')(app)
// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})

/**
 * *INIT ALL THE COUNTRIES* 
 */
// require("./server/config/init_default_db/init_countries.js")
// require("./server/config/init_default_db/init_states_us.js")
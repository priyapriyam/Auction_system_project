var mysql = require('mysql')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use('/',api=express.Router());
require('./routes/api')(api)

app.listen(6000,() => {
    console.log("server connection done with 6000")
})




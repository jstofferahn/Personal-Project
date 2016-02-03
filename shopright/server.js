var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 3006;

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

var mongoUri = "mongodb://localhost:27017/public"
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log("Successfully connected to mongodb");
})





app.listen(port, function(){
    console.log('listening on port ' + port);
})
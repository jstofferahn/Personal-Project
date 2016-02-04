var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var mongoose = require('mongoose');
var menuCtrl = require('./controllers/menuCtrl');
var galleryCtrl = require('./controllers/galleryCtrl');


var app = express();
var ObjectId = require('mongodb').objectId
var mongoUri = 'mongodb://localhost:27017/public'

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('success')
})

app.use(cors())
var port = 8015;



app.get('/api/products', menuCtrl.read)
app.put('/api/products/:id', menuCtrl.update)
app.post('/api/products', menuCtrl.create)
app.delete('/api/products/:id', menuCtrl.delete)


app.get('/api/pictures', galleryCtrl.read)
app.put('/api/pictures/:id', galleryCtrl.update)
app.post('/api/pictures', galleryCtrl.create)
app.delete('/api/pictures/:id', galleryCtrl.delete)




app.listen(port, function(){
    console.log('listen on ' + port)
});
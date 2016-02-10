var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport')
var bcrypt = require('bcrypt-nodejs');
var local = require('passport-local')
var mongoose = require('mongoose');

var session = require('express-session')
var menuCtrl = require('./controllers/menuCtrl');
var galleryCtrl = require('./controllers/galleryCtrl');
var reservationCtrl = require('./controllers/reservationCtrl')
var userCtrl = require('./controllers/userCtrl')

var app = express();


app.use(session({secret: 'mySecret'}));
app.use(passport.initialize());
app.use(passport.session());
var ObjectId = require('mongodb').objectId
var mongoUri = 'mongodb://localhost:27017/public'




app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
    console.log('success')
})

app.use(cors())
var port = 8080;

var forceLogin = function(req, res, next) {
    if (req.isAuthenticated()){
        next()
    }
    else {
        res.status(401).send()
    }
}


// Menu Items

app.get('/api/products', menuCtrl.read)
app.put('/api/products/:id', forceLogin, menuCtrl.update)
app.post('/api/products', forceLogin, menuCtrl.create)
app.delete('/api/products/:id', forceLogin, menuCtrl.delete)

// Gallery Images

app.get('/api/pictures',  galleryCtrl.read)
app.put('/api/pictures/:id', forceLogin, galleryCtrl.update)
app.post('/api/pictures', forceLogin, galleryCtrl.create)
app.delete('/api/pictures/:id', forceLogin, galleryCtrl.delete)

// Reservations

app.get('/api/reservation', reservationCtrl.read)
app.get('/api/reservation/date/:year/:month/:day', reservationCtrl.readDay)
app.put('/api/reservation/:id', reservationCtrl.update)
app.post('/api/reservation', reservationCtrl.create)
app.delete('/api/reservation/:id', reservationCtrl.delete)


//login

app.post('/login', passport.authenticate('local'));
app.get('/logout', userCtrl.logout);








app.listen(port, function(){
    console.log('listen on ' + port)
});
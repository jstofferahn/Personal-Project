var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var bcrypt = require('bcrypt-nodejs');

var mongoose = require('mongoose');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var Session = require('express-session')
var menuCtrl = require('./controllers/menuCtrl');
var galleryCtrl = require('./controllers/galleryCtrl');
var reservationCtrl = require('./controllers/reservationCtrl')
var userCtrl = require('./controllers/userCtrl')
var authCtrl = require('./controllers/authCtrl')
var user = require('./models/userModel')
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();
app.use(Session({ secret: 'mySecret' }));
app.use(Passport.initialize());
app.use(Passport.session());

Passport.use(new LocalStrategy('local', function (username, password, done) {
    console.log('Looking for user');
    user.findOne({ username: username }, function (err, result) {
        if (err) {
            console.error('KABOOM');
            return done(err)
        } else if (result) {
            if (result.password === password) {
                console.log('all good here');
                return done(null, result)
            } else {
                console.log('password failed');
                return done("Invalid Password", false)
            }
        } else {
            console.log('username failed');
            return done("Invalid UserName", false)
        }
    })
}));

Passport.serializeUser(function (user, done) {
    done(null, user);
})
Passport.deserializeUser(function (obj, done) {
    done(null, obj);
})

var ObjectId = require('mongodb').objectId
var mongoUri = 'mongodb://localhost:27017/public'




app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('success')
})

app.use(cors())
var port = 8080;




// Menu Items

app.get('/api/products', menuCtrl.read)
app.put('/api/products/:id', authCtrl.forceAuth, menuCtrl.update)
app.post('/api/products', authCtrl.forceAuth, menuCtrl.create)
app.delete('/api/products/:id', authCtrl.forceAuth, menuCtrl.delete)

// Gallery Images

app.get('/api/pictures', galleryCtrl.read)
app.put('/api/pictures/:id', authCtrl.forceAuth, galleryCtrl.update)
app.post('/api/pictures', authCtrl.forceAuth, galleryCtrl.create)
app.delete('/api/pictures/:id', authCtrl.forceAuth, galleryCtrl.delete)

// Reservations

app.get('/api/reservation', reservationCtrl.read)
app.get('/api/reservation/date/:year/:month/:day', reservationCtrl.readDay)
app.put('/api/reservation/:id', reservationCtrl.update)
app.post('/api/reservation', reservationCtrl.create)
app.delete('/api/reservation/:id', reservationCtrl.delete)


//User

app.post('/api/user', userCtrl.create);
app.get('/api/user', userCtrl.read);
app.put('/api/user/:id', userCtrl.update);
app.delete('/api/user/:id', userCtrl.delete);


//Login
app.post('/api/login', Passport.authenticate('local'), authCtrl.successResponse);
app.get('/api/logout', authCtrl.logOut)
app.get('/api/currentuser', authCtrl.currentUser)








app.listen(port, function () {
    console.log('listen on ' + port)
});
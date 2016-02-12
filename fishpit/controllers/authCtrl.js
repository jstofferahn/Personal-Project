var UserModel = require('../models/userModel');

module.exports = {
    forceAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            next()
        }
        else {
            res.status(401).send()
        }
    },
    logOut: function (req, res) {
        req.logout();
        res.send();
    },
    currentUser: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.send(req.user)
        } else {
            res.status(401).send
        }
    },
    successResponse: function (req, res) {
        res.send(req.user)
    }

}
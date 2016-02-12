var Menu = require('./../models/menuModel')


module.exports = {
    read: function (req, res) {

        Menu.find()
            .exec()
            .then(function (err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    res.send(result)
                }
            })
    },
    update: function (req, res) {
        Menu.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result)
            }
        })
    },
    create: function (req, res) {

        req.body.price = req.body.price * 1
        var sighting = new Menu(req.body);
        console.log(sighting);
        sighting.save(function (err, result) {
            if (err) {

                return res.send(err);
            } else {
                res.send(result)
            }
        })
    },
    delete: function (req, res) {
        console.log(req.body)
        Menu.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                res.send(result)
            }
        })
    }
}
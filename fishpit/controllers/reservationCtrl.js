var Reservation = require('./../models/customerModel')


module.exports = {
    read: function (req, res) {

        Reservation.find()
            .exec()
            .then(function (err, result) {
                if (err) {
                    return res.send(err);
                } else {
                    res.send(result)
                }
            })
    },
    readDay: function (req, res) {
        Reservation.find({ 'date.year': req.params.year }, function (err, result) {
            if (err) res.send(err);
            var dateArr = [];
            if (result.length > 0) {
                for (var i = 0; i < result.length; i++) {
                    if (result[i].date.month.toString() === req.params.month && result[i].date.day.toString() === req.params.day) {


                        dateArr.push(result[i]);

                    }
                }
            }
            res.send(dateArr)
        })


    },
    update: function (req, res) {
        Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result)
            }
        })
    },
    create: function (req, res) {
        console.log(req.body)

        var sighting = new Reservation(req.body);
        console.log(sighting);
        sighting.save(function (err, result) {
            console.log(result)
            if (err) {

                res.send(err);
            } else {


                res.send(result)
            }
        })
    },
    delete: function (req, res) {
        console.log(req.body)
        Reservation.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                return res.send(err);
            } else {
                res.send(result)
            }
        })
    }
}
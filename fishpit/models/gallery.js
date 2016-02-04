var mongoose = require('mongoose')



var gallerySchema = mongoose.Schema({
    image: {type: 'String'}
})

module.exports = mongoose.model('Gallery', gallerySchema)
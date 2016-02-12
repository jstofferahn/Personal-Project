var mongoose = require('mongoose');



var customerSchema = mongoose.Schema({
    firstName: { type: 'String', required: true },
    lastName: { type: 'String', required: true },
    guests: { type: 'Number', required: true },

    date: {

        day: { type: 'Number', required: true },
        month: { type: 'Number', required: true },
        year: { type: 'Number', required: true }
    },

    time: {
        hour: { type: 'Number', required: true },
        minute: { type: 'Number', required: true }

    },
    email: { type: 'String' },
    phone: { type: 'Number' }
});



module.exports = mongoose.model('Customer', customerSchema)
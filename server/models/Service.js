const mongoose = require('mongoose');

const { Schema } = mongoose;

const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
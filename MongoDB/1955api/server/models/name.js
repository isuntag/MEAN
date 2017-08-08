var mongoose = require('mongoose');

var NameSchema = new mongoose.Schema({
    name: String,
}, {timestamps: true});

mongoose.model('Name', NameSchema);

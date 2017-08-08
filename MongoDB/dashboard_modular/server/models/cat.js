var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    age: {type: Number, required: true},
    color: {type: String, required: true}
}, {timestamps: true});

mongoose.model('Cat', CatSchema);

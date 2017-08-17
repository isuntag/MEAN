var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true,
        minlength: 3,
    }
}, {timestamps: true});

mongoose.model('Note', NoteSchema);

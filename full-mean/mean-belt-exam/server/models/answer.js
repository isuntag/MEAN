'use strict';
const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
	content: {
		type: String,
		required: [true, "Answer is required."]
	},
	support: {
		type: String
	},
	likes: Number,
	_questionID: {
		type: String,
		required: [true, "No question ID."]
	},
	_userId: {
		type: String,
		// required: [true, "No user ID."]
	}
},{timestamps:true})
const Answer = mongoose.model('Answer', AnswerSchema)

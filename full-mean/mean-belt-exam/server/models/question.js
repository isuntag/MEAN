'use strict';
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
	content: {
		type: String,
		required: [true, "Question is required."]
	},
	description: {
		type: String
	},
	_userId: String
},{timestamps:true})
const Question = mongoose.model('Question', QuestionSchema)

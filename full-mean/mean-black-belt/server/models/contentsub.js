'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const SubSchema = new mongoose.Schema({
	_content: {type: Schema.Types.ObjectId, ref: 'Content'},
	subtitle: {
		type: String,
		required: true
	},
	count: {
		type: Number,
		required: [true, "Count is required."]
	},
	_username: {
		type: String,
		required: [true, "User adding question is required."]
	},
	_userID: {
		type: String,
		required: true
	}
}, { timestamps: true });

const Sub = mongoose.model('Sub', SubSchema)

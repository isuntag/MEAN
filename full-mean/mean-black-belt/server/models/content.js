'use strict';
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ContentSchema = new mongoose.Schema({
	contenttitle: {
		type: String,
		required: true
	},
	contentsubs: [{type: Schema.Types.ObjectId, ref: 'Sub'}],
	_username: {
		type: String,
		required: [true, "User adding question is required."]
	},
	_userID: {
		type: String,
		required: true
	}
}, { timestamps: true });

const Content = mongoose.model('Content', ContentSchema)

'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."]
	}
},{timestamps:true})
const User = mongoose.model('User', UserSchema)

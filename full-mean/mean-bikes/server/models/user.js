'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	passwordConfirm: String
})
const User = mongoose.model('User', UserSchema)

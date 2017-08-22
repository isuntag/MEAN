'use strict';
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		minlength: [3, "First Name must be at least 3 characters."],
		required: [true, "First Name is required."]
	},
	lastName: {
		type: String,
		minlength: [3, "Last Name must be at least 3 characters."],
		required: [true, "Last Name is required."]
	},
	email: {
		type: String,
		required: [true, "Email is required."],
		validate: {
          validator: function( value ) {
            return /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test( value );
          },
          message: "Invalid email format."
        }
	},
	age: {
		type: Number,
		required: [true, "Age is required."],
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	}
}, {timestamps:true});

const User = mongoose.model('User', UserSchema)

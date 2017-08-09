var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter your email.'],
        unique: [true, 'Email already taken.'],
    },
    first_name: {
        type: String,
        required: [true, 'Please enter your first name.'],
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name.'],
    },
    password: {
        type: String,
        required:[true,"Password is required."],
        minlength: [8,"Password must be between 8-255 characters."],
        maxlength: [255,"Password must be between 8-255 characters."],
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{2,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }},
    password_confirm: {
        type: String,
        required:[true,"Password Confirmation is required."],
        validate: {
            validator: function(value){
                return value == this.password;
            }, message:"Passwords must match."
        }},
    birthday: {
        type: Date,
        required: [true, 'Please enter your birthday.'],
    },
}, {timestamps: true});

UserSchema.pre('save', function(done){
    var hashedpw = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
    this.password = hashedpw;
    this.password_confirm = undefined;
    done();
;})


mongoose.model('User', UserSchema)

import { isEmail } from 'validator';
const mongoose =  require('mongoose')

var UserSchema = new mongoose.Schema({
    fname:{
        type: String,
        required:true,
        trim: true,
        minlength: 1
    },
    lname:{
        type: String,
        required:true,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [ isEmail, 'invalid email' ]
    },
    date:{
        type: Date
    }
}, { versionKey: false })
var Users = mongoose.model('users',UserSchema)
module.exports = {Users}
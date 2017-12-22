const validator =  require('validator')
const mongoose =  require('mongoose');

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
    email:{
        type: String,
        required:true,
        trim: true,
        minlength: 1,
        unique: true, //like primary key  can't have multiple
        validate:[{ isAsync:false, validator: validator.isEmail, msg: 'Invalid email.' }]
    },
    date:{
        type: Date
    }
}, { versionKey: false },  { timestamps: { createdAt: 'created_at' } })
var Users = mongoose.model('Users',UserSchema)
module.exports = Users
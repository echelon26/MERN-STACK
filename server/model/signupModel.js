const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
},{collection: 'userDetails'});

userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;
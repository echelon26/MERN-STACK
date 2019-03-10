const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true},
    age:{type:Number,required:true}
},{collection:'personDetails'});

personModel = mongoose.model('personModel',personSchema);
module.exports = personModel;
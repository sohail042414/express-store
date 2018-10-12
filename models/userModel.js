var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: { type : String , required : true },
    lastname: { type : String , required : true },
    username: { type : String , unique : true, required : true, dropDups: true },
    email: { type : String , unique : true, required : true, dropDups: true },
    lastname: { type : String , required : true },
    password: { type : String , required : true },
    status: { type : Boolean , default: true },
});


var userModel = mongoose.model('users',userSchema);

module.exports = userModel;
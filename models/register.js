const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    entries:{
        type:Number,
        default:0
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
const User = mongoose.model('users', UsersSchema);
User.createIndexes();
module.exports = User;
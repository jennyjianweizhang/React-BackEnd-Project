const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    // email:String,
})

let UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel
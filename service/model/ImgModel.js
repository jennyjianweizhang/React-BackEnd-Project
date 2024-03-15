const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    filedname: String,
    filename: String,
    size: Number,
    mimetype: String
})

let ImageModel = mongoose.model('Image', ImageSchema)
module.exports = ImageModel
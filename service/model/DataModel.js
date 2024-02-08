const mongoose = require('mongoose');

const DataSchema =mongoose.Schema({
    id: String,
    name: String,
    data: [Number]
});

const DataModel = new mongoose.model('data', DataSchema)

module.exports = DataModel
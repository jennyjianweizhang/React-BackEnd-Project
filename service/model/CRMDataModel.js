const mongoose = require('mongoose');

const DataSchema =mongoose.Schema({
    "id": String,
    "name": String,
    "data": [Number] 
});

const DataModel = new mongoose.model('crmData', DataSchema)

module.exports = DataModel
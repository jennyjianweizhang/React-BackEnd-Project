const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
  "id": String,
  "name": String,
  "email": String,
  "message": String,
  "detailedDate": String,
  "content": String,
  "labels": [String],
  "time": String,
  "avatar": String,
  "status": [String], 
  "read": Boolean, 
}); 

const EmailModel = mongoose.model('email', emailSchema);

module.exports = EmailModel;
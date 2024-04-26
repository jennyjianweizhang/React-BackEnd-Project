const mongoose = require('mongoose');


const messageSchema = mongoose.Schema({
    text: { type: String },
    sender: { type: String },
    timestamp: { type: String } 
  });
  

const chatSchema = mongoose.Schema({
  "id": String,
  "name": String,
  "email": String,
  "title": String,
  "about": String,
  "phone": String,
  "schedule": String,
  "status": String,
  "avatar": String,
  "messages": [messageSchema], 
}); 

const ChatModel = mongoose.model('chat', chatSchema);

module.exports = ChatModel;
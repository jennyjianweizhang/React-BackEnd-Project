const mongoose = require('mongoose')
const app = require('./app')

mongoose.connect('mongodb+srv://ReactProject:Djy1989321!@cluster0.ofnon4o.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('open', () => {
    console.log('连接成功');
})

app.listen('8000',()=>{
    console.log('serve is running...');
})

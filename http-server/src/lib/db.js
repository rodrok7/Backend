const mongoose = require('mongoose')

function connect (){
return mongoose.connect('mongodb+srv://rodrok7:12345@kodemia-rod.jsrgv.mongodb.net/test',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
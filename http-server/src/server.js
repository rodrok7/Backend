const express = require('express')
const app = express()
const koderRouter = require('./routes/koder')
const mentorRouter = require('./routes/mentor')
app.use(express.json())

app.use('/koder',koderRouter)
app.use('/mentor',mentorRouter)
app.get('/',(request,response)=>{
    response.json({
        succes: true,
        message:'V8'
    })
})
module.exports = app
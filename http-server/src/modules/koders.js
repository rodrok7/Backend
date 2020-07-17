const mongoose = require('mongoose')

const kodersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100,
        minLength: 2
    },
    age: {
        type: Number,
        min: 15,
        max: 100,
        required: true
    },
    gender:{
        trype: String,
        required: true,
        enum: [
            'male',
            'female',
            'nonbinary'
        ]
    }
})


 

module.exports =  mongoose.model('koders', kodersSchema)

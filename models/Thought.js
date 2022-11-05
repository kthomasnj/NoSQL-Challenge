const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema ( 
    {
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    creatAt: {
        type: Date,
        default: Date.now,
        get: timestamp => Date.toString(timestamp)   
    }
}

)
const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            requried: true,
            minlength: 1,
            maxlength: 280
        },
        
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => Date.toString(timestamp)   
        },
        username: {            
            type: String,
            requried: true
        },
        reactions : [
            {
                type: Schema.Types.ObjectId,
                ref: 'reactions'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

userSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
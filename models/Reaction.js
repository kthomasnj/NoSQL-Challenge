const { Schema, model } = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionId: {
            type: String,
            unique: true,
            requried: true,
            trim: true
        },
        
        reactionBody: {
            type: String,
            requried: true,
            maxlength: 280  
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => Date.toString(timestamp)
        }
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('Reaction', reactionsSchema);
module.exports = Reaction;
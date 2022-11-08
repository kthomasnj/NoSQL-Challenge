const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            requried: true,
            trim: true
        },
        
        email: {
            type: String,
            unique: true,
            requried: true,
            match: [/.+@.+\..+/, 'Invalid Email!!!']    
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts'
            }
        ],
        friends : [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
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

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const Users = model('user', userSchema);

module.exports = Users;
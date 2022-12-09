const { schema, model } = require('mongoose');

const userSchema = new schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, 
            trim: true,

        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        thoughts: [
            {
                type: Schema.types.objectId,
                ref: 'Thought'
            }
        ],

        friends: [
            {
                type: Schema.types.objectId,
                ref: 'User'
            }
        ]
    }
);

const User = model('user', userSchema);

module.exports = User;
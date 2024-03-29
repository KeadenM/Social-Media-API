const {Schema, model, Types} = require('mongoose');
const {Thought} = require('./Thought');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type:String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
});

const User = model('User', userSchema);

module.exports = User
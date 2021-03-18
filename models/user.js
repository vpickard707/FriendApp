const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { 
        type: String,
        unique: true,
        required: true,
    },
    email: { 
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

// Schema.set( 'toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         delete ret._id;
//         delete ret.password;
//     }
// })

module.exports = mongoose.model( "User", userSchema );
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    avatar: { 
        type: String,
    },
    location: { 
        type: String,

    },
    gender: {
        type: String,
    },
    politics: {
        type: String,
    },
    children: {
        type: String,
    },
    drink: {
        type: String,
    },
    smoke: {
        type: String,
    },
    cannabis: {
        type: String,
    },
    age: {
        type: String,
    },
    sign: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    interests: [
        {
          type: Schema.Types.ObjectId,
          ref: "Interests"
        }
    ],
    filterBy: [
        {
          type: Schema.Types.ObjectId,
          ref: "FilterBy"
        }
    ],
    favorites: [
        {
          type: Schema.Types.ObjectId,
          ref: "Favorites"
        }
    ],
    matches: [
        {
          type: Schema.Types.ObjectId,
          ref: "Matches"
        }
    ]
});

module.exports = mongoose.model( "Profile", profileSchema );
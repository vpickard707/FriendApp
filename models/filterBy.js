const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filterBySchema = new Schema({
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
    filterInterests: {
        type: String,
    }
});

module.exports = mongoose.model( "FilterBy", filterBySchema );
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    currentUser: { 
        type: String,
    },
    match: { 
        type: String,
    }
});

module.exports = mongoose.model( "Matches", matchSchema );
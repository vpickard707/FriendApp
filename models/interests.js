const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interestSchema = new Schema({
    interest: { 
        type: String,
    }
});

module.exports = mongoose.model( "Interests", interestSchema );
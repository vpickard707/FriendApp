const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    username: {type: String},
    faveUser: { 
        type: String,
    }
});

module.exports = mongoose.model( "Favorites", favoriteSchema );
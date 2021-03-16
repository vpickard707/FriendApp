const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    profileId: { 
        type: String,
    }
});

module.exports = mongoose.model( "Favorites", favoriteSchema );
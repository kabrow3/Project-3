const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Dummy model for TvShows
const Dummy = new Schema({
    show_Name: {
        type: String,
        required: true,
        unique: true
    },
    show_Season: {
        type: Number,
        required: true,
        unique: true
    },
    episode_Name: {
        type: String,
        required: true,
        unique: true
    },
    episode_Id: {
        type: Number,
        required: true,
        unique: true
    },
});


module.exports = Dummy;
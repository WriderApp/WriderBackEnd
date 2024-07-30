const mongoose = require('mongoose');

//Models
const WriderSchema = new mongoose.Schema({
    user: String,
    title: String,
    docType: {
        type: String,
        enum: ['journal', 'manuscript', 'moodBoard'],
        require: true},
    date: {
        type: Date,
        default: Date.now
    },
    body: {type: String, required: true},
    rating: {
        type: Number,
        min: 0,
        max: 6,
        default: 6
    },
    favorites: {type: Boolean, default: false},
}, { timestamps: true })

const Wrider = mongoose.model("Wrider", WriderSchema);

module.exports = Wrider
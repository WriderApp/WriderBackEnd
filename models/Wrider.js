const mongoose = require('mongoose');

//Models
const WriderSchema = new mongoose.Schema({
    user: String,
    title: String,
    docType: {
        type: String,
        enum: ['journal', 'manuscript', 'moodBoard'],
        require: true,
    },
    date: Date,
    body: {type: String, required: true},
    favorites: {type: Boolean, default: false},
}, { timestamps: true })

const Wrider = mongoose.model("Wrider", WriderSchema);

module.exports = Wrider
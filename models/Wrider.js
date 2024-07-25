const mongoose = require('mongoose');

//Models
const WriderSchema = new mongoose.Schema({
    user: String,
    title: String,
    type: String,
    date: Date,
    body: {type: String, required: true},
    favorites: {type: Boolean, default: false},
}, { timestamps: true })

const Wrider = mongoose.model("Wrider", WriderSchema);

module.exports = Wrider
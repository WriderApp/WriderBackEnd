//model for quotes 
const mongoose = require('mongoose');

//Models
const QuoteSchema = new mongoose.Schema({
    quote: String,
    source: String,
});

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote
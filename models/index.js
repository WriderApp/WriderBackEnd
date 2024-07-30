const mongoose = require('mongoose');
const {DATABASE_URL} = process.env

//Establish Connection to MongoDB
async function mongoConnection() {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('Connected to MongoDB Atlas')
    } catch (error) {
        console.error('Connection error:', error);
    }
}
mongoConnection();

module.exports = {
    WriderData: require('./Wrider.js'),
    QuoteData: require('./Quote.js')
}
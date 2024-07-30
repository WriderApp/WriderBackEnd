//controllers for quotes
const db = require('../models');

//Get
const getAllQuotes = async (req, res) => {
    try {
        const quotes = await db.QuoteData.find();
        console.log(quotes)
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get quotes', error });
    }
};

//Delete
const deleteQuote = async (req, res) => {
    try {
        const deleteOneQuote = await db.QuoteData.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteOneQuote);
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete quote', error });
    }
};

//Update
const updateQuote = async (req, res) => {
    try {
        const updateOneQuote = await db.QuoteData.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updateOneQuote);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update quote', error });
    }
};

//Create 
const createQuote = async (req, res) => {
    try {
        const newQuote = await db.QuoteData.create(req.body);
        res.status(200).json(newQuote);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create quote', error});
    }
};

//Show RANDOM - only route to be called on the frontend
const randomQuote = async (req, res) => {
    try {
        const allQuotes = await db.QuoteData.find();
        const randomNumber = Math.floor(Math.random() * allQuotes.length);
        const randomQuote = allQuotes[randomNumber];
        res.status(200).json(randomQuote);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get random quote', error });
    }
};

//Show 
const showQuote = async (req, res) => {
    try {
        const dailyQuote = await db.QuoteData.findById(req.params.id);
        res.status(200).json(dailyQuote);
    } catch (error) {
        res.status(500).json({ message: 'Failed to load quote', error });
    }
};


module.exports = { getAllQuotes, deleteQuote, updateQuote, createQuote, randomQuote, showQuote }
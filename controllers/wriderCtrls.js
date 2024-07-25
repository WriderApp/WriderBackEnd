// =========> DB Queries and Routes <=========
const db = require('../models');

//GET (INDEX)
const getAllEntries = async (req, res) => {
    // res.send('Youve reached the getAllEnries route aka our GET index show all')
    try {
        const entries = await db.WriderData.find();
        //Log all entries
        console.log(entries)
        //Send entries as JSON res to client
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch entries', error});
    }
};

//DELETE (DELETE)


//PUT (UPDATE)


//POST (CREATE)
const createEntry = async (req, res) => {
    // res.send(' Youve reached the POST route for creating an entry')
    try {
        const newEntry = await db.WriderData.create(req.body);
        //log new entry
        // console.log(newEntry)
        //Send new entry as JSON response to client
        res.status(200).json(newEntry);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create entry', error});
    }
};



module.exports = { getAllEntries, createEntry }
const express = require('express');
const router = express.Router();


//All functions/methods imported from controller folder
const { wriderCtrl } = require('../controllers');

// =========> ROUTES & METHODS <========= //

//Index of all entries
router.get('/', wriderCtrl.getAllEntries);

//Route for posting new entry to the index, from a form
router.post('/', wriderCtrl.createEntry);

//Route for updating entries using their id
router.put('/:id', wriderCtrl.updateEntry);

//Route for deleteing entries using their id
router.delete('/:id', wriderCtrl.deleteEntry);




//Give application ability to use the above routes from routes/index.js 
module.exports = router;
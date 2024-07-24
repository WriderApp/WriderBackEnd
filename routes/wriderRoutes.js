const express = require('express');
const router = express.Router();


//All functions/methods imported from controller folder
const { wriderCtrl } = require('../controllers');

// =========> ROUTES & METHODS <========= //

//Index of all entries
router.get('/', wriderCtrl.getAllEntries);

//Route for posting new entry to the index, from a form
router.post('/', wriderCtrl.createEntry);





//Give application ability to use the above routes from routes/index.js 
module.exports = router;
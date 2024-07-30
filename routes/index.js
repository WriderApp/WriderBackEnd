// =========> MAIN ROUTER <========= //
const express = require('express');
const router = express.Router();
const wriderRoute = require('./wriderRoutes')
const quoteRoute = require('./quoteRoutes')

//When user hits url /wrider, provides all access to routes.
//wriderRoute calls all routes from /routes/wriderRoutes.js
router.use('/wrider', wriderRoute);
router.use('/quote', quoteRoute);

//Export 'router'
module.exports = router;
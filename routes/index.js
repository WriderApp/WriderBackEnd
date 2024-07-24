// =========> MAIN ROUTER <========= //
const express = require('express');
const router = express.Router();
const wriderRoute = require('./wriderRoutes')

//When user hits url /wrider, provides all access to routes.
//wriderRoute calls all routes from /routes/wriderRoutes.js
router.use('/wrider', wriderRoute);

//Export 'router'
module.exports = router;
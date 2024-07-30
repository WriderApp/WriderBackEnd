/*
Export all functions from ./wriderCtrls.js to be used elsewhere using 'wriderCtrl'

'wriderCtrl' currently being required in /routes/wriderRoutes.js

*/

module.exports = {
    wriderCtrl: require('./wriderCtrls'),
    quoteCtrl: require('./quoteCtrls')
}
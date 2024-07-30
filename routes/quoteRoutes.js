const express = require('express');
const router = express.Router();

const { quoteCtrl } = require('../controllers');

// =========> ROUTES & METHODS <========= //

router.get('/', quoteCtrl.getAllQuotes);

router.get('/random', quoteCtrl.randomQuote);

router.get('/:id', quoteCtrl.showQuote);

router.post('/', quoteCtrl.createQuote);

router.put('/:id', quoteCtrl.updateQuote);

router.delete('/:id', quoteCtrl.deleteQuote)

module.exports = router;
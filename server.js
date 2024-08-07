// =========> DEPENDENCIES <========= //

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mainApp = require('./routes');
const quoteDatabase = require('./routes');
const { port } = process.env;

// =========> MIDDLEWARE <========= //
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// ==========> GET ROUTE <========= //
// app.get('/', (req, res) => {
//     res.send('Wrider App')
// });

app.use('/', mainApp);
app.use('/database', quoteDatabase);

app.use((req, res) => {res.status(404).json({message: 'Not an existing route'})})

// =========> EXPRESS SERVER <========= //
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});


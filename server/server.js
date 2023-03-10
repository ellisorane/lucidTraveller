const express = require('express')
const app = express()
const bodyParser = require('body-parser');
// import database connection
const db = require('./db')

// For password hashing and salt
const bcrypt = require('bcrypt')

const PORT = 8080;


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use('/user', require('./routes/user'))

app.listen(PORT, ( err ) => {
    if( err ) console.log( err )
    console.log(`Server listening on port: ${ PORT }........`)
})
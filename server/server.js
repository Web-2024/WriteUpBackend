//Import express
const express = require('express')
//Import dotenv
require('dotenv').config()
// Invoking express:
const app = express()
// Importing Router object:
const documentRoutes = require('./routes/documents')

// Listening for the app
// environmental variables 
app.listen(process.env.PORT, () => {
    console.log('listening on port 3000!')
})

// MIDDLEWARE 
// GET request handler

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/documents', documentRoutes) 







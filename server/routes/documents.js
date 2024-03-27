// Import express
const express = require('express')
// Create router object
const router = express.Router()

router.get('/', (req, res) => {
    // Creating a dummy response just to see if our request goes through from postman. We'll work on this more later!
    res.json({
        mssg: 'New GET response'
    })
})



module.exports = router
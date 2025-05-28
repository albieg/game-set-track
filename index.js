const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const app = express()

//Enable cors
app.use(cors())

const PORT = process.env.PORT || 5000

// Rate limits
const limiter = rateLimit({
    windowMS: 10 * 60 * 1000,
    max : 10
})
app.use(limiter)
app.set('trust proxy', 1)

// Set static folder
app.use(express.static("public"))

// Routes
app.use('/api', require('./routes'))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
const express = require('express')
const app = express()
app.use(express.json())
const db = require('./db/db')
const userRoute = require('./routes/routes')
app.use('/user', userRoute)

const port = 4000

app.listen(port,() => {
    console.log(port)
}) 
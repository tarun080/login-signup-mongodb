const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/login')
.then((response) => console.log("db is connected") )
.catch((err) => console.log("Error!!!!", err))
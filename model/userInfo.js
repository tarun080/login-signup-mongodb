const mongoose = require('mongoose')

const details = mongoose.Schema({  
    username : {type: String},
    phone: {type: Number},
    email: {type: String},
    password: {type: String}
})

module.exports = mongoose.model("Details", details) 
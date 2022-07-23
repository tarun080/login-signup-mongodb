const controller = require('../controller/logic')
const express = require('express')

const route = express.Router()

route.post('/signup', controller.signup)

route.post('/login', controller.login)

route.all('/updateById/:id', controller.udpateById)

route.all('/deleteById/:id', controller.deleteById)

module.exports = route

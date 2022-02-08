const express = require('express')
const route = express.Router()

route.get('/',(req, res) =>{
    res.send('route file')
})

module.exports = route
const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const catRoutes = require('./routers/CatRouter')

const app = express(); 

app.use(logger('dev'))
app.use(express.json())
app.use(cors())

app.use('/cats' , catRoutes)


module.exports = app
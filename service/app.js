const express = require('express')
const bodyParser = require('body-parser')
const { expressjwt } = require('express-jwt')
const userRoute = require('./routes/UserRouter.js')
const dataRoute = require('./routes/DataRouter.js')
const cors = require('cors');

const app = express()

app.use(cors())

app.use(expressjwt({ secret: 'token_ya', algorithms: ['HS256'] }).unless({path:[/^\/api\//]}))

app.use(bodyParser.json())

app.use(userRoute)

app.use(dataRoute)

module.exports = app
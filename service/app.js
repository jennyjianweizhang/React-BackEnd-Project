const express = require('express')
const bodyParser = require('body-parser')
const { expressjwt } = require('express-jwt')
const userRoute = require('./routes/UserRouter.js')
const dataRoute = require('./routes/DataRouter.js')
const imgRoute = require('./routes/ImgRouter.js')
const path = require('path')
const cors = require('cors');

const app = express()

app.use(cors())

const fullPath = path.resolve(__dirname, './static')
app.use(express.static(fullPath))


app.use(expressjwt({ secret: 'token_ya', algorithms: ['HS256'] }).unless({path:[/^\/api\//, /^\/static\/.*/, '/uploadMultiple', '/favicon.ico' ]}))

app.use(bodyParser.json())

app.use(userRoute)

app.use(dataRoute)

app.use(imgRoute)

module.exports = app
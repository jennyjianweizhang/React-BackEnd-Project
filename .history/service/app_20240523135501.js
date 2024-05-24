const express = require('express')
const bodyParser = require('body-parser')
const { expressjwt } = require('express-jwt')
const userRoute = require('./routes/UserRouter.js')
const ecommerceDataRouter = require('./routes/EcommerceDataRouter.js')
const crmDataRouter = require('./routes/CRMDataRouter.js')
const analyticsRouter = require('./routes/AnalyticsDataRouter.js')
const emailDataRouter = require('./routes/EmailDataRouter.js')
const chatDataRouter = require('./routes/ChatDataRouter.js')
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

app.use(ecommerceDataRouter)

app.use(crmDataRouter)

app.use('/email', emailDataRouter);


app.use(analyticsRouter)

app.use(chatDataRouter)

app.use(imgRoute)

app.get('*', (req, res) => {
    res.sendFile(path.join(fullPath, 'index.html'));
});

module.exports = app
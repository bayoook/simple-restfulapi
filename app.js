const express = require('express')
require('dotenv').config()
const authenticationRoute = require('./src/routes/authentication.routes')
const methodRoute = require('./src/routes/method.routes')
const activityRoute = require('./src/routes/activity.routes')
const scheduleRoute = require('./src/routes/schedule.routes')

const app = express()
const PORT = process.env.PORT
const baseUrlWeb = '/api'

app.listen(PORT).on('listening', () => {
    console.log(`API server started on port: ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(baseUrlWeb, authenticationRoute)
app.use(baseUrlWeb, methodRoute)
app.use(baseUrlWeb, activityRoute)
app.use(baseUrlWeb, scheduleRoute)

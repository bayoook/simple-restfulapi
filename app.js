const express = require('express')
require('dotenv').config()
const authenticationRoute = require('./src/routes/authentication.routes')
const jwtRoute = require('./src/routes/jwt.routes')
const methodRoute = require('./src/routes/method.routes')

const app = express()
const PORT = process.env.PORT
const baseUrlWeb = '/api'

app.listen(PORT).on('listening', () => {
    console.log(`API server started on port: ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(baseUrlWeb, authenticationRoute)
app.use(baseUrlWeb, jwtRoute)
app.use(baseUrlWeb, methodRoute)

const router = require('express').Router()
const authenticationController = require('../controllers/authentication.controller')

router.post('/authentication', authenticationController.post)

module.exports = router
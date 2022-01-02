const router = require('express').Router()
const authenticationController = require('../controllers/authentication.controller')

router.post('/auth', authenticationController.post)

module.exports = router
const router = require('express').Router()
const jwtMiddleware = require('../middleware/jwt.middleware')
const jwtController = require('../controllers/jwt.controller')

router.get('/jwt-test', jwtMiddleware.authenticateToken, (req, res) => {
    jwtController.get(req, res)
})

module.exports = router
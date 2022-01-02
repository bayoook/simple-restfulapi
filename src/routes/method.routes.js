const router = require('express').Router()
const jwtMiddleware = require('../middleware/jwt.middleware')
const methodController = require('../controllers/method.controller')

router.post('/method/insert', jwtMiddleware.authenticateToken, (req, res) => {
    methodController.insert(req, res)
})

router.get('/method/get', jwtMiddleware.authenticateToken, (req, res) => {
    methodController.getAll(req, res)
})

router.get('/method/get/:methodId', jwtMiddleware.authenticateToken, (req, res) => {
    methodController.getByID(req, res)
})

router.delete('/method/delete/:methodId', jwtMiddleware.authenticateToken, (req, res) => {
    methodController.softDelete(req, res)
})

router.post('/method/update/:methodId', jwtMiddleware.authenticateToken, (req, res) => {
    methodController.update(req, res)
})

module.exports = router
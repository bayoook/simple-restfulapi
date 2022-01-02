const router = require('express').Router()
const jwtMiddleware = require('../middleware/jwt.middleware')
const activityController = require('../controllers/activity.controller')

router.post('/activity/insert', jwtMiddleware.authenticateToken, (req, res) => {
    activityController.insert(req, res)
})

router.get('/activity/get', jwtMiddleware.authenticateToken, (req, res) => {
    activityController.getAll(req, res)
})

router.get('/activity/get/:activityId', jwtMiddleware.authenticateToken, (req, res) => {
    activityController.getByID(req, res)
})

router.delete('/activity/delete/:activityId', jwtMiddleware.authenticateToken, (req, res) => {
    activityController.softDelete(req, res)
})

router.post('/activity/update/:activityId', jwtMiddleware.authenticateToken, (req, res) => {
    activityController.update(req, res)
})

module.exports = router
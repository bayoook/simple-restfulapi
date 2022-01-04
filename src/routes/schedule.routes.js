/* eslint-disable max-len */
const express = require('express');
const router = new express.Router();
const jwtMiddleware = require('../middleware/jwt.middleware');
const scheduleController = require('../controllers/schedule.controller');

router.post('/schedule/insert', jwtMiddleware.authenticateToken, (req, res) => {
  scheduleController.insert(req, res);
});
router.post('/schedule/insert/batch', jwtMiddleware.authenticateToken, (req, res) => {
  scheduleController.batchInsert(req, res);
});
router.get('/schedule/get', jwtMiddleware.authenticateToken, (req, res) => {
  scheduleController.getAll(req, res);
});
router.get('/schedule/get/time_range', jwtMiddleware.authenticateToken, (req, res) => {
  scheduleController.getByTime(req, res);
});
router.get('/schedule/get/:scheduleId', jwtMiddleware.authenticateToken, (req, res) => {
  scheduleController.getByID(req, res);
});
router.delete('/schedule/delete/:scheduleId', jwtMiddleware.authenticateToken, (req, res) => {
  scheduleController.softDelete(req, res);
});
router.post('/schedule/update/:scheduleId', jwtMiddleware.authenticateToken, (req, res) => {
  scheduleController.update(req, res);
});

module.exports = router;

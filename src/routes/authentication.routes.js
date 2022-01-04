const express = require('express');
const authenticationController = require(
    '../controllers/authentication.controller');

const router = new express.Router();
router.post('/auth', authenticationController.post);

module.exports = router;

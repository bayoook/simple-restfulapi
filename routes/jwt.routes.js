import express from 'express';

import {authenticateToken} from '../middleware/jwt.middleware.js';
import {getJwtTest} from '../controllers/jwt.controller.js';

const router = express.Router();

router.get('/jwt-test', authenticateToken, (req, res) => {
    getJwtTest(req, res);
});

export default router
import express from 'express';

import {postAuthenticationUser} from '../controllers/authentication.controller.js';

const router = express.Router();

router.post('/authentication', postAuthenticationUser);

export default router
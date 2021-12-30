import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';

config();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT).on('listening', () => {
    console.log(`API server started on port: ${PORT}`);
})

app.use(json());
app.use(urlencoded({extended: true}));

const baseUrlWeb = '/api';

import authenticationRoute from './routes/authentication.routes.js';
import jwtRoute from './routes/jwt.routes.js';

app.use(baseUrlWeb, authenticationRoute);
app.use(baseUrlWeb, jwtRoute);

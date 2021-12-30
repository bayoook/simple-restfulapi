import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const TOKEN = process.env.TOKEN_SECRET


function generateAccessToken(username) {
    return jsonwebtoken.sign(username, TOKEN, {expiresIn: '1800s'});
};

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jsonwebtoken.verify(token, TOKEN, (err, user) => {
        console.log(err);

        if (err) return res.sendStatus(403);

        req.user = user;

        next();
    });
};

export {generateAccessToken, authenticateToken};
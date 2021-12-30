import {generateAccessToken} from '../middleware/jwt.middleware.js'

const postAuthenticationUser = async (req, res) => {
    const token = generateAccessToken({username: req.body.username});
    res.json({token});
};

export {postAuthenticationUser};
const jsonwebtoken = require('jsonwebtoken')
require('dotenv').config()

const TOKEN = process.env.TOKEN_SECRET

class jwtMiddleware {
    generateToken(username) {
        return jsonwebtoken.sign(username, TOKEN, {})
    }

    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (!token) return res.status(401).send("A token is required for authentication")

        try {
            const decoded = jsonwebtoken.verify(token, TOKEN)
            req.user = decoded
        } catch (err) {
            return res.status(401).send("Invalid token")
        }
        return next()
    }
}

module.exports = new jwtMiddleware()
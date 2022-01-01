const jwtMiddleware = require('../middleware/jwt.middleware')
const responseHelper = require('../helpers/response.helper')

class authenticationController{
    async post(req, res) {
        try {
            const { username } = req.body;
            if ( !username ) {
                return res.status(400).send(responseHelper.fail('error', 'Invalid username'));
            }

            const encToken = jwtMiddleware.generateToken({ username: username });
            const responseData = { jwt_token: encToken };
            res.status(200).send(responseHelper.success('success', responseData));
        } catch (error) {
            console.log(error);
            res.status(500).send(responseHelper.fail('error', 'Internal server error'));
        }
    }
}


module.exports = new authenticationController();
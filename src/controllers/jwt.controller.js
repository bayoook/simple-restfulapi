const responseHelper = require('../helpers/response.helper');

class jwtController{
    async get(req, res) {
        try {
            res.status(200).send(responseHelper.success('success', { jwt_test: 'success' }));
        } catch (error) {
            console.log(error)
            res.status(500).send(responseHelper.fail('error', 'Internal Server Error'));
        }
    }
}

module.exports = new jwtController();

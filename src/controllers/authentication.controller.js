const jwtMiddleware = require('../middleware/jwt.middleware');
const responseHelper = require('../helpers/response.helper');


/**
 * Used to handle the request for authentication
 */
class AuthenticationController {
  /**
     * Handle response for specific endpoint.
     * @param {any} req the request object.
     * @param {any} res the response object.
     * @return {any} the response object
     */
  async post(req, res) {
    try {
      const {username} = req.body;
      if ( !username ) {
        return res.status(400).send(
            responseHelper.fail('error', 'Invalid username'));
      }

      const encToken = jwtMiddleware.generateToken({username: username});
      const responseData = {jwt_token: encToken};
      res.status(200).send(responseHelper.success('success', responseData));
    } catch (error) {
      console.log(error);
      res.status(500).send(
          responseHelper.fail('error', 'Internal server error'));
    }
  }
}


module.exports = new AuthenticationController();

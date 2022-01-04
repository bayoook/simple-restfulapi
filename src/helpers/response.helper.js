
/**
 * ResponseHelper use for handle response
 */
class ResponseHelper {
  /**
   * use for handle response
   * @param {string} status
   * @param {string} data
   * @return {any}
   */
  success(status, data) {
    return {
      status: status,
      data: data,
    };
  }

  /**
   * use for handle fail response
   * @param {*} status
   * @param {*} message
   * @return {*}
   */
  fail(status, message) {
    return {
      status: status,
      message: message,
    };
  }
}

module.exports = new ResponseHelper();

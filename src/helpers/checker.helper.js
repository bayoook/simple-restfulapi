/**
 * Helper for checking existing value is valid
 */
class CheckerHelper {
  /**
   * Handle response for specific endpoint.
   * @param {string} value the request object.
   * @return {boolean} true if value is integer, false otherwise.
   */
  isInt(value) {
    return !isNaN(value) &&
            parseInt(Number(value)) == value &&
            !isNaN(parseInt(value, 10));
  }
}

module.exports = new CheckerHelper();

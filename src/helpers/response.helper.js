class responseHelper {
    success(status, data) {
        return {
          status: status,
          data: data
        }
    }
    fail(status, message) {
        return {
          status: status,
          message: message
        }
    }
}

module.exports = new responseHelper()
/**
 * Helper for convert existing value to another value
 */
class ConverterHelper {
  /**
   * convert array to array of object
   * @param {any} key
   * @param {any} data
   * @return {any}
   */
  arrayToArrayOfObject(key, data) {
    let obj = null; const output = []; let i = 0;
    for (i = 0; i < data.length; i++) {
      obj = {};
      obj[key] = data[i];
      output.push(obj);
    }
    return output;
  }

  /**
   * convert epoch to timestamp date format
   * @param {integer} epoch
   * @return {any}
   */
  epochToTimestamp(epoch) {
    return new Date(epoch * 1000);
  }
}

module.exports = new ConverterHelper();

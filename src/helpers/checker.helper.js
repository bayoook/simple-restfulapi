class checkerHelper {
    isInt(value) {
        return !isNaN(value) && 
            parseInt(Number(value)) == value && 
            !isNaN(parseInt(value, 10));
    }
}

module.exports = new checkerHelper()
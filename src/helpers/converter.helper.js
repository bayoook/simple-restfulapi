class converterHelper {
    arrayToArrayOfObject(key, data) {
        var obj = null, output = [], i = 0
        for(i = 0; i < data.length; i++) {
            obj = {}
            obj[key] = data[i]
            output.push(obj)
        }
        return output
    }
    
    epochToTimestamp(epoch) {
        return new Date(epoch * 1000)
    }
}

module.exports = new converterHelper()
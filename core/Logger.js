
class Logger {
    /**
     * @param {String} type 
     * @param {String} errorMessage 
     */
    error(type, errorMessage) {
        let date = new Date();
        return console.error(`[ERROR]: [${type.toUpperCase()}] (${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}) - ${errorMessage}`);
    };

    /**
     * @param {String} type 
     * @param {String} logMessage 
     */
    log(type, logMessage) {
        let date = new Date();
        return console.log(
            `[LOG]: [${type.toUpperCase()}] (${date.getHours()}:${date.getMinutes()}:${date.getMinutes()}) - ${logMessage}`
        );
    }

}

module.exports = Logger;
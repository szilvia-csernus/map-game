class TimeOut {
    constructor() {
        this.timeOutID = null;
        this.setTimeOutFunction = this.setTimeOutFunction.bind(this);
        this.clearTimeOutFunction = this.clearTimeOutFunction.bind(this);
    }

    setTimeOutFunction(callback, time) {
        this.timeOutID = window.setTimeout(callback, time);
    } 

    clearTimeOutFunction() {
        window.clearTimeout(this.timeOutID)
   }

}

// TimeOut.prototype.setTimeOutFunction = function (callback, time) {
//     this.timeOutID = setTimeout(callback, time);
// } 

// TimeOut.prototype.clearTimeOutFunction = function () {
//     clearTimeout(this.timeOutID)
// }

export default TimeOut
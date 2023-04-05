// This class provides a blueprint for many timeOut functions throughout the code.
// It helps writing cleaner code with regards to setting and clearing the function.
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
        window.clearTimeout(this.timeOutID);
   }

}

export default TimeOut;
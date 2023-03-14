class timeOutFunction {
    constructor() {
        this.timeOutID = null;
        this.setTimeOutFunction = (callback, time) => {
            this.timeOutID = setTimeout(callback, time)
        }
        this.clearTimeOutFunction = () => clearTimeout(this.timeOutID)
    }
}

export default timeOutFunction
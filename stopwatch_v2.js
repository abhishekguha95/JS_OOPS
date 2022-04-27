function Stopwatch() {
    let duration = 0;
    let watchRunning;
    let t1 = 0;
    let t2 = 0;

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        set: function(value){
            duration = value;
        }
    });

    Object.defineProperty(this, 'watchRunning', {
        get: function () {
            return watchRunning;
        },
    });

    Object.defineProperty(this, 't1', {
        get: function () {
            return t1;
        },
    });

    Object.defineProperty(this, 't2', {
        get: function () {
            return t2;
        },
    });
}

Stopwatch.prototype.start = function () {
    if (this.watchRunning) {
        return 'stopwatch already started';
    }
    this.watchRunning = true;
    this.t1 = new Date();
};

Stopwatch.prototype.stop = function () {
    if (!this.watchRunning) {
        return 'stopwatch already stopped';
    }
    this.watchRunning = false;
    this.t2 = new Date();
    this.duration = (this.t2 - this.t1) / 1000;
};

Stopwatch.prototype.reset = function () {
    this.watchRunning = false;
    this.duration = 0;
    this.t1 = 0;
    this.t2 = 0;
};

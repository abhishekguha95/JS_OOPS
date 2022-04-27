function Stopwatch() {
    let duration = 0;           // all 4 are private properties not accessible outside
    let watchRunning = false;
    let t1 = 0;
    let t2 = 0;

    this.start = function () {
        if (watchRunning) {
            return 'stopwatch already started';
        }

        watchRunning = true;
        t1 = new Date();
    };

    this.stop = function () {
        if (!watchRunning) {
            return 'stopwatch already stopped';
        }

        watchRunning = false;
        t2 = new Date();
        duration = duration + (t2.getTime() - t1.getTime()) / 1000;
    };

    this.reset = function () {
        watchRunning = false;
        duration = 0;
        t1 = 0;
        t2 = 0;
    };

    Object.defineProperty(this, 'duration', {  //getter defined for duration
        get: function () {
            return duration;
        },
    });
}

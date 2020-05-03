"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = {
    speed: 10,
    radius: 10,
    ticksBeforeItch: function () {
        var min = 7;
        var max = 14;
        return Math.random() * (max - min) + min;
    },
    ticksBeforeScratch: function () {
        var min = 7;
        var max = 14;
        return Math.random() * (max - min) + min;
    },
    ticksBeforeYawn: function () {
        var min = 20;
        var max = 40;
        return Math.random() * (max - min) + min;
    },
    scratchDirection: function () {
        var directions = {
            1: 's',
            2: 'w',
            3: 'e',
            4: 'n',
        };
        var rnd = Math.floor(Math.random() * (5 - 1)) + 1;
        // @ts-ignore
        return directions[rnd];
    },
};
var Neko = /** @class */ (function () {
    function Neko(config) {
        var _this = this;
        this.state = {
            name: 'still',
            x: 0,
            y: 0,
            ticksBeforeItch: 5,
            ticksBeforeScratch: 5,
            ticksBeforeYawn: 10,
        };
        // updates the state
        this.update = function (x, y) {
            if (_this.state.name == 'still') {
                _this.updateStill(x, y);
            }
            else if (_this.state.name == 'itch') {
                _this.updateItch(x, y);
            }
            else if (_this.state.name == 'alert') {
                _this.updateAlert(x, y);
            }
            else if (_this.state.name == 'run') {
                _this.updateRun(x, y);
            }
            else if (_this.state.name == 'scratch') {
                _this.updateScratch(x, y);
            }
            else if (_this.state.name == 'yawn') {
                _this.updateYawn(x, y);
            }
            else if (_this.state.name == 'sleep') {
                _this.updateSleep(x, y);
            }
        };
        this.config = __assign({}, config);
        this.state.ticksBeforeItch = config.ticksBeforeItch();
        this.state.ticksBeforeScratch = config.ticksBeforeScratch();
        this.state.ticksBeforeYawn = config.ticksBeforeYawn();
    }
    Object.defineProperty(Neko.prototype, "img", {
        get: function () {
            return "" + (this.state.direction ? this.state.direction : '') + this.state.name + (this.state.tick ? this.state.tick : '');
        },
        enumerable: true,
        configurable: true
    });
    Neko.prototype.updateSleep = function (x, y) {
        // reset ticks
        if (!this.cursorClose(x, y)) {
            this.state.name = 'alert';
            this.state.tick = null;
            this.state.ticksBeforeItch = this.config.ticksBeforeItch();
            this.state.ticksBeforeScratch = this.config.ticksBeforeScratch();
            return;
        }
        this.state.tick = this.state.tick === 1 ? 2 : 1;
    };
    Neko.prototype.updateYawn = function (x, y) {
        // reset ticks
        if (!this.cursorClose(x, y)) {
            this.state.name = 'alert';
            this.state.framesYawn = null;
            return;
        }
        if (this.state.framesYawn - 1 == 0) {
            this.state.name = 'sleep';
            this.state.tick = 1;
            this.state.framesYawn = null;
            this.state.ticksBeforeYawn = this.config.ticksBeforeYawn();
        }
        this.state.framesYawn -= 1;
    };
    Neko.prototype.updateScratch = function (x, y) {
        if (!this.cursorClose(x, y)) {
            this.state.name = 'alert';
            this.state.tick = null;
            this.state.framesScratch = null;
            this.state.ticksBeforeScratch = this.config.ticksBeforeScratch();
            this.state.direction = null;
            return;
        }
        // done scratching
        if (this.state.framesScratch - 1 == 0) {
            this.state.name = 'still';
            this.state.tick = null;
            this.state.framesScratch = null;
            this.state.ticksBeforeScratch = this.config.ticksBeforeScratch();
            this.state.direction = null;
            return;
        }
        this.state.framesScratch -= 1;
        this.state.tick = this.state.tick === 1 ? 2 : 1;
    };
    Neko.prototype.updateStill = function (x, y) {
        if (!this.cursorClose(x, y)) {
            this.state.name = 'alert';
            this.state.tick = null;
        }
        console.log({
            itch: this.state.ticksBeforeItch,
            scratch: this.state.ticksBeforeScratch,
            yawn: this.state.ticksBeforeYawn,
        });
        // todo make random
        if (this.state.ticksBeforeYawn === 0) {
            this.state.name = 'yawn';
            this.state.framesYawn = 2;
            return;
        }
        // todo make random
        if (this.state.ticksBeforeItch === 0) {
            this.state.name = 'itch';
            this.state.framesItch = 4;
            this.state.tick = 1;
            return;
        }
        // todo make random
        if (this.state.ticksBeforeScratch === 0) {
            this.state.name = 'scratch';
            this.state.framesScratch = 4;
            this.state.tick = 1;
            this.state.direction = this.config.scratchDirection();
            return;
        }
        this.state.ticksBeforeItch -= 1;
        this.state.ticksBeforeScratch -= 1;
    };
    Neko.prototype.updateItch = function (x, y) {
        if (!this.cursorClose(x, y)) {
            this.state.name = 'alert';
            this.state.tick = null;
            this.state.framesItch = null;
            this.state.ticksBeforeItch = this.config.ticksBeforeItch();
            return;
        }
        // done itching
        if (this.state.framesItch - 1 == 0) {
            this.state.name = 'still';
            this.state.tick = null;
            this.state.framesItch = null;
            this.state.ticksBeforeItch = this.config.ticksBeforeItch();
            return;
        }
        this.state.framesItch -= 1;
        this.state.tick = this.state.tick === 1 ? 2 : 1;
    };
    Neko.prototype.updateAlert = function (x, y) {
        if (this.cursorClose(x, y)) {
            this.state.name = 'still';
            this.state.tick = null;
            this.state.direction = null;
            return;
        }
        this.state.tick = 1;
        this.state.name = 'run';
        this.state.direction = this.chooseRunDirection(x, y);
        this.makeStep(x, y);
    };
    Neko.prototype.updateRun = function (x, y) {
        if (this.cursorClose(x, y)) {
            this.state.name = 'still';
            this.state.tick = null;
            this.state.direction = null;
            return;
        }
        this.state.ticksBeforeYawn = Math.max(this.state.ticksBeforeYawn - 1, 0);
        this.state.direction = this.chooseRunDirection(x, y);
        this.state.tick = this.state.tick === 1 ? 2 : 1;
        this.makeStep(x, y);
    };
    Neko.prototype.makeStep = function (x, y) {
        // x=0 y=-10
        var dx = x - this.state.x;
        var dy = y - this.state.y;
        var phi = Math.atan2(dy, dx);
        this.state.x += this.config.speed * Math.cos(phi);
        this.state.y += this.config.speed * Math.sin(phi);
    };
    Neko.prototype.cursorClose = function (x, y) {
        // TODO remove magic number
        return Math.hypot(this.state.x - x, this.state.y - y) < this.config.radius;
    };
    Neko.prototype.chooseRunDirection = function (x, y) {
        var dx = x - this.state.x;
        var dy = y - this.state.y;
        var diag = Math.hypot(dx, dy);
        var phi = calcAngleDegrees(dx, dy);
        // todo use math.pi
        switch (true) {
            case -22.5 < phi && phi <= 22.5:
                return 'e';
            case -67.5 < phi && phi <= -22.5:
                return 'ne';
            case -112.5 < phi && phi <= -67.5:
                return 'n';
            case -157.5 < phi && phi <= -112.5:
                return 'nw';
            case (-180 <= phi && phi <= -157.5) || (157.5 < phi && phi <= 180):
                return 'w';
            case 112.5 < phi && phi <= 157.5:
                return 'sw';
            case 67.5 < phi && phi <= 112.5:
                return 's';
            case 22.5 < phi && phi <= 67.5:
                return 'se';
            default:
                throw Error("error in finding path direction " + diag + " " + phi);
        }
    };
    return Neko;
}());
exports.Neko = Neko;
function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
}
exports.defaultNeko = function () {
    return new Neko(exports.defaultConfig);
};
//# sourceMappingURL=neko.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tsneko"] = factory();
	else
		root["tsneko"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// export { Neko, NekoConfig, defaultConfig, defaultNeko } from './neko';
__export(__webpack_require__(/*! ./neko */ "./src/neko.ts"));
var web_1 = __webpack_require__(/*! ./web */ "./src/web.ts");
exports.run = web_1.run;


/***/ }),

/***/ "./src/neko.ts":
/*!*********************!*\
  !*** ./src/neko.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var randInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.defaultConfig = {
    speed: 10,
    radius: 10,
    ticksBeforeItch: function () {
        var min = 7;
        var max = 14;
        return randInt(min, max);
    },
    ticksBeforeScratch: function () {
        var min = 7;
        var max = 14;
        return randInt(min, max);
    },
    ticksBeforeYawn: function () {
        var min = 20;
        var max = 40;
        return randInt(min, max);
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


/***/ }),

/***/ "./src/web.ts":
/*!********************!*\
  !*** ./src/web.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// append element to body
// take link for assets (assetsDir)
Object.defineProperty(exports, "__esModule", { value: true });
function run(n, assetsDir) {
    var cx = 0;
    var cy = 0;
    document.onmousemove = function (ev) {
        cx = ev.x;
        cy = ev.y;
    };
    var e = addElToDom();
    var tick = function () {
        n.update(cx, cy);
        draw(e, n, assetsDir);
    };
    var handle = setInterval(tick, 300);
    return function () {
        clearInterval(handle);
        e.remove();
    };
}
exports.run = run;
function draw(e, n, assetsDir) {
    e.style.top = n.state.y + 'px';
    e.style.left = n.state.x + 'px';
    e.src = assetsDir + '/' + n.img + '.gif';
}
// returns id
function addElToDom() {
    var e = document.createElement('img');
    e.src =
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FB8W6wUPCYAEmWjy.png%3Alarge&f=1&nofb=1';
    var s = e.style;
    s.position = 'absolute';
    s.top = '0px';
    s.left = '0px';
    var body = document.querySelector('body');
    body.appendChild(e);
    return e;
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c25la28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RzbmVrby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c25la28vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHNuZWtvLy4vc3JjL25la28udHMiLCJ3ZWJwYWNrOi8vdHNuZWtvLy4vc3JjL3dlYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLHlFQUF5RTtBQUN6RSw2REFBdUI7QUFFdkIsNkRBQTRCO0FBQW5CLHVCQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1FaLElBQU0sT0FBTyxHQUFHLFVBQUMsR0FBVyxF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QUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztBQUMzQyxDQUFDO0FBRUQsYUFBYTtBQUNiLFNBQVMsVUFBVTtJQUNqQixJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxHQUFHO1FBQ0gsNEhBQTRILENBQUM7SUFDL0gsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNsQixDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUN4QixDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNkLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRWYsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyIsImZpbGUiOiJ0c25la28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0c25la29cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widHNuZWtvXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBleHBvcnQgeyBOZWtvLCBOZWtvQ29uZmlnLCBkZWZhdWx0Q29uZmlnLCBkZWZhdWx0TmVrbyB9IGZyb20gJy4vbmVrbyc7XG5leHBvcnQgKiBmcm9tICcuL25la28nO1xuXG5leHBvcnQgeyBydW4gfSBmcm9tICcuL3dlYic7XG4iLCJleHBvcnQgaW50ZXJmYWNlIE5la29Db25maWcge1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgdGlja3NCZWZvcmVJdGNoOiAoKSA9PiBudW1iZXI7XG4gIHRpY2tzQmVmb3JlU2NyYXRjaDogKCkgPT4gbnVtYmVyO1xuICB0aWNrc0JlZm9yZVlhd246ICgpID0+IG51bWJlcjtcblxuICAvL2dlbmVyYXRlcyBzY3JhdGNoIGRpcmVjdGlvbiBhdCBlYWNoIGNhbGxcbiAgc2NyYXRjaERpcmVjdGlvbjogKCkgPT4gJ3MnIHwgJ3cnIHwgJ2UnIHwgJ24nO1xufVxuXG5jb25zdCByYW5kSW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT5cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb25maWc6IE5la29Db25maWcgPSB7XG4gIHNwZWVkOiAxMCxcbiAgcmFkaXVzOiAxMCxcbiAgdGlja3NCZWZvcmVJdGNoOiAoKSA9PiB7XG4gICAgbGV0IG1pbiA9IDc7XG4gICAgbGV0IG1heCA9IDE0O1xuICAgIHJldHVybiByYW5kSW50KG1pbiwgbWF4KTtcbiAgfSxcbiAgdGlja3NCZWZvcmVTY3JhdGNoOiAoKSA9PiB7XG4gICAgbGV0IG1pbiA9IDc7XG4gICAgbGV0IG1heCA9IDE0O1xuICAgIHJldHVybiByYW5kSW50KG1pbiwgbWF4KTtcbiAgfSxcbiAgdGlja3NCZWZvcmVZYXduOiAoKSA9PiB7XG4gICAgbGV0IG1pbiA9IDIwO1xuICAgIGxldCBtYXggPSA0MDtcbiAgICByZXR1cm4gcmFuZEludChtaW4sIG1heCk7XG4gIH0sXG4gIHNjcmF0Y2hEaXJlY3Rpb246ICgpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0ge1xuICAgICAgMTogJ3MnLFxuICAgICAgMjogJ3cnLFxuICAgICAgMzogJ2UnLFxuICAgICAgNDogJ24nLFxuICAgIH07XG4gICAgY29uc3Qgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAxKSkgKyAxO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gZGlyZWN0aW9uc1tybmRdO1xuICB9LFxufTtcblxuZXhwb3J0IGNsYXNzIE5la28ge1xuICBzdGF0ZToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHRpY2s/OiBudW1iZXI7XG4gICAgZGlyZWN0aW9uPzogc3RyaW5nO1xuICAgIHRpY2tzQmVmb3JlSXRjaDogbnVtYmVyO1xuICAgIGZyYW1lc0l0Y2g/OiBudW1iZXI7XG4gICAgdGlja3NCZWZvcmVTY3JhdGNoOiBudW1iZXI7XG4gICAgZnJhbWVzU2NyYXRjaD86IG51bWJlcjtcbiAgICB0aWNrc0JlZm9yZVlhd246IG51bWJlcjtcbiAgICBmcmFtZXNZYXduPzogbnVtYmVyO1xuICB9ID0ge1xuICAgIG5hbWU6ICdzdGlsbCcsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHRpY2tzQmVmb3JlSXRjaDogNSxcbiAgICB0aWNrc0JlZm9yZVNjcmF0Y2g6IDUsXG4gICAgdGlja3NCZWZvcmVZYXduOiAxMCxcbiAgfTtcblxuICBnZXQgaW1nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuc3RhdGUuZGlyZWN0aW9uID8gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gOiAnJ30ke1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lXG4gICAgfSR7dGhpcy5zdGF0ZS50aWNrID8gdGhpcy5zdGF0ZS50aWNrIDogJyd9YDtcbiAgfVxuXG4gIGNvbmZpZzogTmVrb0NvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5la29Db25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4uY29uZmlnIH07XG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZUl0Y2ggPSBjb25maWcudGlja3NCZWZvcmVJdGNoKCk7XG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVNjcmF0Y2ggPSBjb25maWcudGlja3NCZWZvcmVTY3JhdGNoKCk7XG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVlhd24gPSBjb25maWcudGlja3NCZWZvcmVZYXduKCk7XG4gIH1cblxuICAvLyB1cGRhdGVzIHRoZSBzdGF0ZVxuICB1cGRhdGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09ICdzdGlsbCcpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RpbGwoeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ2l0Y2gnKSB7XG4gICAgICB0aGlzLnVwZGF0ZUl0Y2goeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ2FsZXJ0Jykge1xuICAgICAgdGhpcy51cGRhdGVBbGVydCh4LCB5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubmFtZSA9PSAncnVuJykge1xuICAgICAgdGhpcy51cGRhdGVSdW4oeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3NjcmF0Y2gnKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcmF0Y2goeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3lhd24nKSB7XG4gICAgICB0aGlzLnVwZGF0ZVlhd24oeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3NsZWVwJykge1xuICAgICAgdGhpcy51cGRhdGVTbGVlcCh4LCB5KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlU2xlZXAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAvLyByZXNldCB0aWNrc1xuICAgIGlmICghdGhpcy5jdXJzb3JDbG9zZSh4LCB5KSkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ2FsZXJ0JztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlSXRjaCA9IHRoaXMuY29uZmlnLnRpY2tzQmVmb3JlSXRjaCgpO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVNjcmF0Y2ggPSB0aGlzLmNvbmZpZy50aWNrc0JlZm9yZVNjcmF0Y2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLnRpY2sgPSB0aGlzLnN0YXRlLnRpY2sgPT09IDEgPyAyIDogMTtcbiAgfVxuXG4gIHVwZGF0ZVlhd24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAvLyByZXNldCB0aWNrc1xuICAgIGlmICghdGhpcy5jdXJzb3JDbG9zZSh4LCB5KSkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ2FsZXJ0JztcbiAgICAgIHRoaXMuc3RhdGUuZnJhbWVzWWF3biA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuZnJhbWVzWWF3biAtIDEgPT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3NsZWVwJztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IDE7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc1lhd24gPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVlhd24gPSB0aGlzLmNvbmZpZy50aWNrc0JlZm9yZVlhd24oKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmZyYW1lc1lhd24gLT0gMTtcbiAgfVxuXG4gIHVwZGF0ZVNjcmF0Y2goeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdhbGVydCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNTY3JhdGNoID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVTY3JhdGNoID0gdGhpcy5jb25maWcudGlja3NCZWZvcmVTY3JhdGNoKCk7XG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZG9uZSBzY3JhdGNoaW5nXG4gICAgaWYgKHRoaXMuc3RhdGUuZnJhbWVzU2NyYXRjaCAtIDEgPT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3N0aWxsJztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc1NjcmF0Y2ggPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVNjcmF0Y2ggPSB0aGlzLmNvbmZpZy50aWNrc0JlZm9yZVNjcmF0Y2goKTtcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmZyYW1lc1NjcmF0Y2ggLT0gMTtcbiAgICB0aGlzLnN0YXRlLnRpY2sgPSB0aGlzLnN0YXRlLnRpY2sgPT09IDEgPyAyIDogMTtcbiAgfVxuXG4gIHVwZGF0ZVN0aWxsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmN1cnNvckNsb3NlKHgsIHkpKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAnYWxlcnQnO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB0b2RvIG1ha2UgcmFuZG9tXG4gICAgaWYgKHRoaXMuc3RhdGUudGlja3NCZWZvcmVZYXduID09PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAneWF3bic7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc1lhd24gPSAyO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRvZG8gbWFrZSByYW5kb21cbiAgICBpZiAodGhpcy5zdGF0ZS50aWNrc0JlZm9yZUl0Y2ggPT09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdpdGNoJztcbiAgICAgIHRoaXMuc3RhdGUuZnJhbWVzSXRjaCA9IDQ7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRvZG8gbWFrZSByYW5kb21cbiAgICBpZiAodGhpcy5zdGF0ZS50aWNrc0JlZm9yZVNjcmF0Y2ggPT09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzY3JhdGNoJztcbiAgICAgIHRoaXMuc3RhdGUuZnJhbWVzU2NyYXRjaCA9IDQ7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSAxO1xuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSB0aGlzLmNvbmZpZy5zY3JhdGNoRGlyZWN0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZUl0Y2ggLT0gMTtcbiAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlU2NyYXRjaCAtPSAxO1xuICB9XG4gIHVwZGF0ZUl0Y2goeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdhbGVydCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNJdGNoID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVJdGNoID0gdGhpcy5jb25maWcudGlja3NCZWZvcmVJdGNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZG9uZSBpdGNoaW5nXG4gICAgaWYgKHRoaXMuc3RhdGUuZnJhbWVzSXRjaCAtIDEgPT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3N0aWxsJztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc0l0Y2ggPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZUl0Y2ggPSB0aGlzLmNvbmZpZy50aWNrc0JlZm9yZUl0Y2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmZyYW1lc0l0Y2ggLT0gMTtcbiAgICB0aGlzLnN0YXRlLnRpY2sgPSB0aGlzLnN0YXRlLnRpY2sgPT09IDEgPyAyIDogMTtcbiAgfVxuXG4gIHVwZGF0ZUFsZXJ0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzdGlsbCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUudGljayA9IDE7XG4gICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3J1bic7XG4gICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSB0aGlzLmNob29zZVJ1bkRpcmVjdGlvbih4LCB5KTtcbiAgICB0aGlzLm1ha2VTdGVwKHgsIHkpO1xuICB9XG5cbiAgdXBkYXRlUnVuKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzdGlsbCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVZYXduID0gTWF0aC5tYXgodGhpcy5zdGF0ZS50aWNrc0JlZm9yZVlhd24gLSAxLCAwKTtcbiAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IHRoaXMuY2hvb3NlUnVuRGlyZWN0aW9uKHgsIHkpO1xuICAgIHRoaXMuc3RhdGUudGljayA9IHRoaXMuc3RhdGUudGljayA9PT0gMSA/IDIgOiAxO1xuICAgIHRoaXMubWFrZVN0ZXAoeCwgeSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VTdGVwKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgLy8geD0wIHk9LTEwXG4gICAgY29uc3QgZHggPSB4IC0gdGhpcy5zdGF0ZS54O1xuICAgIGNvbnN0IGR5ID0geSAtIHRoaXMuc3RhdGUueTtcbiAgICBsZXQgcGhpID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuXG4gICAgdGhpcy5zdGF0ZS54ICs9IHRoaXMuY29uZmlnLnNwZWVkICogTWF0aC5jb3MocGhpKTtcbiAgICB0aGlzLnN0YXRlLnkgKz0gdGhpcy5jb25maWcuc3BlZWQgKiBNYXRoLnNpbihwaGkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXJzb3JDbG9zZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIC8vIFRPRE8gcmVtb3ZlIG1hZ2ljIG51bWJlclxuICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMuc3RhdGUueCAtIHgsIHRoaXMuc3RhdGUueSAtIHkpIDwgdGhpcy5jb25maWcucmFkaXVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VSdW5EaXJlY3Rpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGR4ID0geCAtIHRoaXMuc3RhdGUueDtcbiAgICBjb25zdCBkeSA9IHkgLSB0aGlzLnN0YXRlLnk7XG4gICAgY29uc3QgZGlhZyA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgICBsZXQgcGhpID0gY2FsY0FuZ2xlRGVncmVlcyhkeCwgZHkpO1xuXG4gICAgLy8gdG9kbyB1c2UgbWF0aC5waVxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSAtMjIuNSA8IHBoaSAmJiBwaGkgPD0gMjIuNTpcbiAgICAgICAgcmV0dXJuICdlJztcbiAgICAgIGNhc2UgLTY3LjUgPCBwaGkgJiYgcGhpIDw9IC0yMi41OlxuICAgICAgICByZXR1cm4gJ25lJztcbiAgICAgIGNhc2UgLTExMi41IDwgcGhpICYmIHBoaSA8PSAtNjcuNTpcbiAgICAgICAgcmV0dXJuICduJztcbiAgICAgIGNhc2UgLTE1Ny41IDwgcGhpICYmIHBoaSA8PSAtMTEyLjU6XG4gICAgICAgIHJldHVybiAnbncnO1xuICAgICAgY2FzZSAoLTE4MCA8PSBwaGkgJiYgcGhpIDw9IC0xNTcuNSkgfHwgKDE1Ny41IDwgcGhpICYmIHBoaSA8PSAxODApOlxuICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgY2FzZSAxMTIuNSA8IHBoaSAmJiBwaGkgPD0gMTU3LjU6XG4gICAgICAgIHJldHVybiAnc3cnO1xuICAgICAgY2FzZSA2Ny41IDwgcGhpICYmIHBoaSA8PSAxMTIuNTpcbiAgICAgICAgcmV0dXJuICdzJztcbiAgICAgIGNhc2UgMjIuNSA8IHBoaSAmJiBwaGkgPD0gNjcuNTpcbiAgICAgICAgcmV0dXJuICdzZSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKGBlcnJvciBpbiBmaW5kaW5nIHBhdGggZGlyZWN0aW9uICR7ZGlhZ30gJHtwaGl9YCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNBbmdsZURlZ3JlZXMoeDogYW55LCB5OiBhbnkpIHtcbiAgcmV0dXJuIChNYXRoLmF0YW4yKHksIHgpICogMTgwKSAvIE1hdGguUEk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TmVrbyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBOZWtvKGRlZmF1bHRDb25maWcpO1xufTtcbiIsIi8vIGFwcGVuZCBlbGVtZW50IHRvIGJvZHlcbi8vIHRha2UgbGluayBmb3IgYXNzZXRzIChhc3NldHNEaXIpXG5cbi8vIG1haW5cbi8vIHJldHVybiBmdW5jIHRvIHN0b3AgYW5kIGNsZWFuXG4vLyBpbnRlcm5hbGx5OlxuLy9cbi8vIHNldEludGVydmFsKCgpPT57bi51cGRhdGUoKX0pXG5cbmltcG9ydCAqIGFzIE5la28gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBydW4objogTmVrby5OZWtvLCBhc3NldHNEaXI6IHN0cmluZykge1xuICBsZXQgY3ggPSAwO1xuICBsZXQgY3kgPSAwO1xuICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChldikgPT4ge1xuICAgIGN4ID0gZXYueDtcbiAgICBjeSA9IGV2Lnk7XG4gIH07XG5cbiAgbGV0IGUgPSBhZGRFbFRvRG9tKCk7XG5cbiAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICBuLnVwZGF0ZShjeCwgY3kpO1xuICAgIGRyYXcoZSwgbiwgYXNzZXRzRGlyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGUgPSBzZXRJbnRlcnZhbCh0aWNrLCAzMDApO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICBlLnJlbW92ZSgpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkcmF3KGU6IEhUTUxJbWFnZUVsZW1lbnQsIG46IE5la28uTmVrbywgYXNzZXRzRGlyOiBzdHJpbmcpIHtcbiAgZS5zdHlsZS50b3AgPSBuLnN0YXRlLnkgKyAncHgnO1xuICBlLnN0eWxlLmxlZnQgPSBuLnN0YXRlLnggKyAncHgnO1xuICBlLnNyYyA9IGFzc2V0c0RpciArICcvJyArIG4uaW1nICsgJy5naWYnO1xufVxuXG4vLyByZXR1cm5zIGlkXG5mdW5jdGlvbiBhZGRFbFRvRG9tKCk6IEhUTUxJbWFnZUVsZW1lbnQge1xuICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGUuc3JjID1cbiAgICAnaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGcGJzLnR3aW1nLmNvbSUyRm1lZGlhJTJGQjhXNndVUENZQUVtV2p5LnBuZyUzQWxhcmdlJmY9MSZub2ZiPTEnO1xuICBjb25zdCBzID0gZS5zdHlsZTtcbiAgcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHMudG9wID0gJzBweCc7XG4gIHMubGVmdCA9ICcwcHgnO1xuXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZSk7XG4gIHJldHVybiBlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
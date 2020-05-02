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
/*! exports provided: Neko, defaultConfig, defaultNeko, main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _neko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neko */ "./src/neko.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Neko", function() { return _neko__WEBPACK_IMPORTED_MODULE_0__["Neko"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return _neko__WEBPACK_IMPORTED_MODULE_0__["defaultConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultNeko", function() { return _neko__WEBPACK_IMPORTED_MODULE_0__["defaultNeko"]; });

/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ "./src/web.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _web__WEBPACK_IMPORTED_MODULE_1__["main"]; });





/***/ }),

/***/ "./src/neko.ts":
/*!*********************!*\
  !*** ./src/neko.ts ***!
  \*********************/
/*! exports provided: defaultConfig, Neko, defaultNeko */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return defaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Neko", function() { return Neko; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultNeko", function() { return defaultNeko; });
var __assign = (undefined && undefined.__assign) || function () {
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
var defaultConfig = {
    speed: 2,
    radius: 1,
    ticksBeforeItch: 5,
    ticksBeforeScratch: 5,
    ticksBeforeYawn: 10,
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
        this.state.ticksBeforeItch = config.ticksBeforeItch;
        this.state.ticksBeforeScratch = config.ticksBeforeScratch;
        this.state.ticksBeforeYawn = config.ticksBeforeYawn;
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
            this.state.ticksBeforeYawn = this.config.ticksBeforeYawn;
        }
        this.state.framesYawn -= 1;
    };
    Neko.prototype.updateScratch = function (x, y) {
        if (!this.cursorClose(x, y)) {
            this.state.name = 'alert';
            this.state.tick = null;
            this.state.framesScratch = null;
            this.state.ticksBeforeScratch = this.config.ticksBeforeScratch;
            this.state.direction = null;
            return;
        }
        // done scratching
        if (this.state.framesScratch - 1 == 0) {
            this.state.name = 'still';
            this.state.tick = null;
            this.state.framesScratch = null;
            this.state.ticksBeforeScratch = this.config.ticksBeforeScratch;
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
            this.state.ticksBeforeItch = this.config.ticksBeforeItch;
            return;
        }
        // done itching
        if (this.state.framesItch - 1 == 0) {
            this.state.name = 'still';
            this.state.tick = null;
            this.state.framesItch = null;
            this.state.ticksBeforeItch = this.config.ticksBeforeItch;
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

function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
}
var defaultNeko = function () {
    return new Neko(defaultConfig);
};


/***/ }),

/***/ "./src/web.ts":
/*!********************!*\
  !*** ./src/web.ts ***!
  \********************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
// append element to body
// take link for assets (assetsDir)
function main(n, assetsDir) {
    var cx = 0;
    var cy = 0;
    document.onmousemove = function (ev) {
        console.log(ev.x, ev.y);
        cx = ev.x;
        cy = ev.y;
    };
    var e = addElToDom();
    var tick = function () {
        n.update(cx, cy);
        draw(e, n, assetsDir);
        console.log('tick');
    };
    var handle = setInterval(tick, 500);
    return function () {
        clearInterval(handle);
    };
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c25la28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RzbmVrby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c25la28vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHNuZWtvLy4vc3JjL25la28udHMiLCJ3ZWJwYWNrOi8vdHNuZWtvLy4vc3JjL3dlYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBRTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDU3RCLElBQU0sYUFBYSxH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ZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0c25la29cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widHNuZWtvXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgeyBOZWtvLCBkZWZhdWx0Q29uZmlnLCBkZWZhdWx0TmVrbyB9IGZyb20gJy4vbmVrbyc7XG5cbmV4cG9ydCB7IG1haW4gfSBmcm9tICcuL3dlYic7XG4iLCJleHBvcnQgaW50ZXJmYWNlIE5la29Db25maWcge1xuICBzcGVlZDogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgdGlja3NCZWZvcmVJdGNoOiBudW1iZXI7XG4gIHRpY2tzQmVmb3JlU2NyYXRjaDogbnVtYmVyO1xuICB0aWNrc0JlZm9yZVlhd246IG51bWJlcjtcblxuICAvL2dlbmVyYXRlcyBzY3JhdGNoIGRpcmVjdGlvbiBhdCBlYWNoIGNhbGxcbiAgc2NyYXRjaERpcmVjdGlvbjogKCkgPT4gJ3MnIHwgJ3cnIHwgJ2UnIHwgJ24nO1xufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogTmVrb0NvbmZpZyA9IHtcbiAgc3BlZWQ6IDIsXG4gIHJhZGl1czogMSxcbiAgdGlja3NCZWZvcmVJdGNoOiA1LFxuICB0aWNrc0JlZm9yZVNjcmF0Y2g6IDUsXG4gIHRpY2tzQmVmb3JlWWF3bjogMTAsXG4gIHNjcmF0Y2hEaXJlY3Rpb246ICgpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0ge1xuICAgICAgMTogJ3MnLFxuICAgICAgMjogJ3cnLFxuICAgICAgMzogJ2UnLFxuICAgICAgNDogJ24nLFxuICAgIH07XG4gICAgY29uc3Qgcm5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUgLSAxKSkgKyAxO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gZGlyZWN0aW9uc1tybmRdO1xuICB9LFxufTtcblxuZXhwb3J0IGNsYXNzIE5la28ge1xuICBzdGF0ZToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHRpY2s/OiBudW1iZXI7XG4gICAgZGlyZWN0aW9uPzogc3RyaW5nO1xuICAgIHRpY2tzQmVmb3JlSXRjaDogbnVtYmVyO1xuICAgIGZyYW1lc0l0Y2g/OiBudW1iZXI7XG4gICAgdGlja3NCZWZvcmVTY3JhdGNoOiBudW1iZXI7XG4gICAgZnJhbWVzU2NyYXRjaD86IG51bWJlcjtcbiAgICB0aWNrc0JlZm9yZVlhd246IG51bWJlcjtcbiAgICBmcmFtZXNZYXduPzogbnVtYmVyO1xuICB9ID0ge1xuICAgIG5hbWU6ICdzdGlsbCcsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHRpY2tzQmVmb3JlSXRjaDogNSxcbiAgICB0aWNrc0JlZm9yZVNjcmF0Y2g6IDUsXG4gICAgdGlja3NCZWZvcmVZYXduOiAxMCxcbiAgfTtcblxuICBnZXQgaW1nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuc3RhdGUuZGlyZWN0aW9uID8gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gOiAnJ30ke1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lXG4gICAgfSR7dGhpcy5zdGF0ZS50aWNrID8gdGhpcy5zdGF0ZS50aWNrIDogJyd9YDtcbiAgfVxuXG4gIGNvbmZpZzogTmVrb0NvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5la29Db25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4uY29uZmlnIH07XG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZUl0Y2ggPSBjb25maWcudGlja3NCZWZvcmVJdGNoO1xuICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVTY3JhdGNoID0gY29uZmlnLnRpY2tzQmVmb3JlU2NyYXRjaDtcbiAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlWWF3biA9IGNvbmZpZy50aWNrc0JlZm9yZVlhd247XG4gIH1cblxuICAvLyB1cGRhdGVzIHRoZSBzdGF0ZVxuICB1cGRhdGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09ICdzdGlsbCcpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RpbGwoeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ2l0Y2gnKSB7XG4gICAgICB0aGlzLnVwZGF0ZUl0Y2goeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ2FsZXJ0Jykge1xuICAgICAgdGhpcy51cGRhdGVBbGVydCh4LCB5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubmFtZSA9PSAncnVuJykge1xuICAgICAgdGhpcy51cGRhdGVSdW4oeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3NjcmF0Y2gnKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcmF0Y2goeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3lhd24nKSB7XG4gICAgICB0aGlzLnVwZGF0ZVlhd24oeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3NsZWVwJykge1xuICAgICAgdGhpcy51cGRhdGVTbGVlcCh4LCB5KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlU2xlZXAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAvLyByZXNldCB0aWNrc1xuICAgIGlmICghdGhpcy5jdXJzb3JDbG9zZSh4LCB5KSkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ2FsZXJ0JztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS50aWNrID0gdGhpcy5zdGF0ZS50aWNrID09PSAxID8gMiA6IDE7XG4gIH1cblxuICB1cGRhdGVZYXduKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgLy8gcmVzZXQgdGlja3NcbiAgICBpZiAoIXRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdhbGVydCc7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc1lhd24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmZyYW1lc1lhd24gLSAxID09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzbGVlcCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSAxO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNZYXduID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVZYXduID0gdGhpcy5jb25maWcudGlja3NCZWZvcmVZYXduO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZnJhbWVzWWF3biAtPSAxO1xuICB9XG5cbiAgdXBkYXRlU2NyYXRjaCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5jdXJzb3JDbG9zZSh4LCB5KSkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ2FsZXJ0JztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc1NjcmF0Y2ggPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVNjcmF0Y2ggPSB0aGlzLmNvbmZpZy50aWNrc0JlZm9yZVNjcmF0Y2g7XG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZG9uZSBzY3JhdGNoaW5nXG4gICAgaWYgKHRoaXMuc3RhdGUuZnJhbWVzU2NyYXRjaCAtIDEgPT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3N0aWxsJztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc1NjcmF0Y2ggPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVNjcmF0Y2ggPSB0aGlzLmNvbmZpZy50aWNrc0JlZm9yZVNjcmF0Y2g7XG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5mcmFtZXNTY3JhdGNoIC09IDE7XG4gICAgdGhpcy5zdGF0ZS50aWNrID0gdGhpcy5zdGF0ZS50aWNrID09PSAxID8gMiA6IDE7XG4gIH1cblxuICB1cGRhdGVTdGlsbCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5jdXJzb3JDbG9zZSh4LCB5KSkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ2FsZXJ0JztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gdG9kbyBtYWtlIHJhbmRvbVxuICAgIGlmICh0aGlzLnN0YXRlLnRpY2tzQmVmb3JlWWF3biA9PT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3lhd24nO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNZYXduID0gMjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0b2RvIG1ha2UgcmFuZG9tXG4gICAgaWYgKHRoaXMuc3RhdGUudGlja3NCZWZvcmVJdGNoID09PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAnaXRjaCc7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc0l0Y2ggPSA0O1xuICAgICAgdGhpcy5zdGF0ZS50aWNrID0gMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0b2RvIG1ha2UgcmFuZG9tXG4gICAgaWYgKHRoaXMuc3RhdGUudGlja3NCZWZvcmVTY3JhdGNoID09PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAnc2NyYXRjaCc7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc1NjcmF0Y2ggPSA0O1xuICAgICAgdGhpcy5zdGF0ZS50aWNrID0gMTtcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gdGhpcy5jb25maWcuc2NyYXRjaERpcmVjdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVJdGNoIC09IDE7XG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVNjcmF0Y2ggLT0gMTtcbiAgfVxuICB1cGRhdGVJdGNoKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmN1cnNvckNsb3NlKHgsIHkpKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAnYWxlcnQnO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUuZnJhbWVzSXRjaCA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlSXRjaCA9IHRoaXMuY29uZmlnLnRpY2tzQmVmb3JlSXRjaDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBkb25lIGl0Y2hpbmdcbiAgICBpZiAodGhpcy5zdGF0ZS5mcmFtZXNJdGNoIC0gMSA9PSAwKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAnc3RpbGwnO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUuZnJhbWVzSXRjaCA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlSXRjaCA9IHRoaXMuY29uZmlnLnRpY2tzQmVmb3JlSXRjaDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLmZyYW1lc0l0Y2ggLT0gMTtcbiAgICB0aGlzLnN0YXRlLnRpY2sgPSB0aGlzLnN0YXRlLnRpY2sgPT09IDEgPyAyIDogMTtcbiAgfVxuXG4gIHVwZGF0ZUFsZXJ0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzdGlsbCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUudGljayA9IDE7XG4gICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3J1bic7XG4gICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSB0aGlzLmNob29zZVJ1bkRpcmVjdGlvbih4LCB5KTtcbiAgICB0aGlzLm1ha2VTdGVwKHgsIHkpO1xuICB9XG5cbiAgdXBkYXRlUnVuKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzdGlsbCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVZYXduID0gTWF0aC5tYXgodGhpcy5zdGF0ZS50aWNrc0JlZm9yZVlhd24gLSAxLCAwKTtcbiAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IHRoaXMuY2hvb3NlUnVuRGlyZWN0aW9uKHgsIHkpO1xuICAgIHRoaXMuc3RhdGUudGljayA9IHRoaXMuc3RhdGUudGljayA9PT0gMSA/IDIgOiAxO1xuICAgIHRoaXMubWFrZVN0ZXAoeCwgeSk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VTdGVwKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgLy8geD0wIHk9LTEwXG4gICAgY29uc3QgZHggPSB4IC0gdGhpcy5zdGF0ZS54O1xuICAgIGNvbnN0IGR5ID0geSAtIHRoaXMuc3RhdGUueTtcbiAgICBsZXQgcGhpID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuXG4gICAgdGhpcy5zdGF0ZS54ICs9IHRoaXMuY29uZmlnLnNwZWVkICogTWF0aC5jb3MocGhpKTtcbiAgICB0aGlzLnN0YXRlLnkgKz0gdGhpcy5jb25maWcuc3BlZWQgKiBNYXRoLnNpbihwaGkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjdXJzb3JDbG9zZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIC8vIFRPRE8gcmVtb3ZlIG1hZ2ljIG51bWJlclxuICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMuc3RhdGUueCAtIHgsIHRoaXMuc3RhdGUueSAtIHkpIDwgdGhpcy5jb25maWcucmFkaXVzO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VSdW5EaXJlY3Rpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGR4ID0geCAtIHRoaXMuc3RhdGUueDtcbiAgICBjb25zdCBkeSA9IHkgLSB0aGlzLnN0YXRlLnk7XG4gICAgY29uc3QgZGlhZyA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgICBsZXQgcGhpID0gY2FsY0FuZ2xlRGVncmVlcyhkeCwgZHkpO1xuXG4gICAgLy8gdG9kbyB1c2UgbWF0aC5waVxuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSAtMjIuNSA8IHBoaSAmJiBwaGkgPD0gMjIuNTpcbiAgICAgICAgcmV0dXJuICdlJztcbiAgICAgIGNhc2UgLTY3LjUgPCBwaGkgJiYgcGhpIDw9IC0yMi41OlxuICAgICAgICByZXR1cm4gJ25lJztcbiAgICAgIGNhc2UgLTExMi41IDwgcGhpICYmIHBoaSA8PSAtNjcuNTpcbiAgICAgICAgcmV0dXJuICduJztcbiAgICAgIGNhc2UgLTE1Ny41IDwgcGhpICYmIHBoaSA8PSAtMTEyLjU6XG4gICAgICAgIHJldHVybiAnbncnO1xuICAgICAgY2FzZSAoLTE4MCA8PSBwaGkgJiYgcGhpIDw9IC0xNTcuNSkgfHwgKDE1Ny41IDwgcGhpICYmIHBoaSA8PSAxODApOlxuICAgICAgICByZXR1cm4gJ3cnO1xuICAgICAgY2FzZSAxMTIuNSA8IHBoaSAmJiBwaGkgPD0gMTU3LjU6XG4gICAgICAgIHJldHVybiAnc3cnO1xuICAgICAgY2FzZSA2Ny41IDwgcGhpICYmIHBoaSA8PSAxMTIuNTpcbiAgICAgICAgcmV0dXJuICdzJztcbiAgICAgIGNhc2UgMjIuNSA8IHBoaSAmJiBwaGkgPD0gNjcuNTpcbiAgICAgICAgcmV0dXJuICdzZSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKGBlcnJvciBpbiBmaW5kaW5nIHBhdGggZGlyZWN0aW9uICR7ZGlhZ30gJHtwaGl9YCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNBbmdsZURlZ3JlZXMoeDogYW55LCB5OiBhbnkpIHtcbiAgcmV0dXJuIChNYXRoLmF0YW4yKHksIHgpICogMTgwKSAvIE1hdGguUEk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TmVrbyA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBOZWtvKGRlZmF1bHRDb25maWcpO1xufTtcbiIsIi8vIGFwcGVuZCBlbGVtZW50IHRvIGJvZHlcbi8vIHRha2UgbGluayBmb3IgYXNzZXRzIChhc3NldHNEaXIpXG5cbi8vIG1haW5cbi8vIHJldHVybiBmdW5jIHRvIHN0b3AgYW5kIGNsZWFuXG4vLyBpbnRlcm5hbGx5OlxuLy9cbi8vIHNldEludGVydmFsKCgpPT57bi51cGRhdGUoKX0pXG5cbmltcG9ydCAqIGFzIE5la28gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKG46IE5la28uTmVrbywgYXNzZXRzRGlyOiBzdHJpbmcpIHtcbiAgbGV0IGN4ID0gMDtcbiAgbGV0IGN5ID0gMDtcbiAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZXYpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldi54LCBldi55KTtcbiAgICBjeCA9IGV2Lng7XG4gICAgY3kgPSBldi55O1xuICB9O1xuXG4gIGxldCBlID0gYWRkRWxUb0RvbSgpO1xuXG4gIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgbi51cGRhdGUoY3gsIGN5KTtcbiAgICBkcmF3KGUsIG4sIGFzc2V0c0Rpcik7XG4gICAgY29uc29sZS5sb2coJ3RpY2snKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGUgPSBzZXRJbnRlcnZhbCh0aWNrLCA1MDApO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHJhdyhlOiBIVE1MSW1hZ2VFbGVtZW50LCBuOiBOZWtvLk5la28sIGFzc2V0c0Rpcjogc3RyaW5nKSB7XG4gIGUuc3R5bGUudG9wID0gbi5zdGF0ZS55ICsgJ3B4JztcbiAgZS5zdHlsZS5sZWZ0ID0gbi5zdGF0ZS54ICsgJ3B4JztcbiAgZS5zcmMgPSBhc3NldHNEaXIgKyAnLycgKyBuLmltZyArICcuZ2lmJztcbn1cblxuLy8gcmV0dXJucyBpZFxuZnVuY3Rpb24gYWRkRWxUb0RvbSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBlLnNyYyA9XG4gICAgJ2h0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRnBicy50d2ltZy5jb20lMkZtZWRpYSUyRkI4VzZ3VVBDWUFFbVdqeS5wbmclM0FsYXJnZSZmPTEmbm9mYj0xJztcbiAgY29uc3QgcyA9IGUuc3R5bGU7XG4gIHMucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBzLnRvcCA9ICcwcHgnO1xuICBzLmxlZnQgPSAnMHB4JztcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5LmFwcGVuZENoaWxkKGUpO1xuICByZXR1cm4gZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
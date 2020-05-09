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
exports.runWeb = web_1.run;
exports.runWebDefault = web_1.runDefault;


/***/ }),

/***/ "./src/neko.ts":
/*!*********************!*\
  !*** ./src/neko.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module provides {@link Neko} class which encapsulates neko logic
 *
 * Most users would want to use {@link defaultNeko}
 * @packageDocumentation
 */
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
/**
 * @internal
 */
var randInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * The default config for {@link Neko}
 *
 * Ticks and scratch direction are randomly generated
 */
exports.defaultConfig = {
    /** The speed param */
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
/**
 * Creates a {@link Neko} with {@link defaultConfig}
 */
function defaultNeko() {
    return new Neko(exports.defaultConfig);
}
exports.defaultNeko = defaultNeko;
/**
 * An implementation of neko
 *
 * @export
 * @class Neko
 * @implements {@link NekoInterface}
 */
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
        this.checkState('sleep');
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
        this.checkState('yawn');
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
        this.checkState('scratch');
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
        this.checkState('still');
        if (!this.cursorClose(x, y)) {
            this.state.name = 'alert';
            this.state.tick = null;
        }
        if (this.state.ticksBeforeYawn === 0) {
            this.state.name = 'yawn';
            this.state.framesYawn = 2;
            return;
        }
        if (this.state.ticksBeforeItch === 0) {
            this.state.name = 'itch';
            this.state.framesItch = 4;
            this.state.tick = 1;
            return;
        }
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
        this.checkState('itch');
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
        this.checkState('alert');
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
        this.checkState('run');
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
    Neko.prototype.checkState = function (name) {
        if (name != this.state.name) {
            throw Error("expected state: " + name + ", got: " + this.state.name);
        }
    };
    return Neko;
}());
exports.Neko = Neko;
/**
 * @internal
 */
function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
}


/***/ }),

/***/ "./src/web.ts":
/*!********************!*\
  !*** ./src/web.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module provides helper functions to use neko in the web
 *
 * Most users would want to use {@link runDefault}
 * @packageDocumentation
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Neko = __importStar(__webpack_require__(/*! ./index */ "./src/index.ts"));
/**
 * Runs neko on the document
 *
 * @param {string} assetsDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 *
 * @export
 * @returns used to remove neko from the document
 */
function runDefault(assetsDir) {
    if (assetsDir === void 0) { assetsDir = '/assets/socks'; }
    var n = Neko.defaultNeko();
    preloadImages.apply(void 0, imgs.map(function (i) { return assetsDir + '/' + i + '.gif'; }));
    return run(n, assetsDir);
}
exports.runDefault = runDefault;
/**
 * Runs neko on the document
 *
 * @export
 * @param {Neko.NekoInterface} n
 * A neko that satisfies the {@link NekoInterface}<br>
 * Most users would want to use the default implementation by supplying {@link defaultNeko}
 * @param {string} assetsDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 * @returns used to remove neko from the document
 */
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
function preloadImages() {
    var imgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        imgs[_i] = arguments[_i];
    }
    var images = [];
    for (var i = 0; i < imgs.length; i++) {
        images[i] = new Image();
        images[i].src = imgs[i];
    }
}
var imgs = [
    'alert',
    'still',
    'nrun1',
    'nrun2',
    'nerun1',
    'nerun2',
    'erun1',
    'erun2',
    'serun1',
    'serun2',
    'srun1',
    'srun2',
    'swrun1',
    'swrun2',
    'wrun1',
    'wrun2',
    'nwrun1',
    'nwrun2',
    'yawn',
    'sleep1',
    'sleep2',
    'itch1',
    'itch2',
    'nscratch1',
    'nscratch2',
    'escratch1',
    'escratch2',
    'sscratch1',
    'sscratch2',
    'wscratch1',
    'wscratch2',
];


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c25la28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RzbmVrby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c25la28vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHNuZWtvLy4vc3JjL25la28udHMiLCJ3ZWJwYWNrOi8vdHNuZWtvLy4vc3JjL3dlYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLHlFQUF5RTtBQUN6RSw2REFBdUI7QUFFdkIsNkRBQW1FO0FBQTFELDBCQUFHLENBQVU7QUFBRSx3Q0FBVSxDQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNIbkQ7Ozs7O0dBS0c7Ozs7Ozs7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T0FBTztJQUNQLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFFBQVE7SUFDUixNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixPQUFPO0lBQ1AsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0NBQ1osQ0FBQyIsImZpbGUiOiJ0c25la28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0c25la29cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widHNuZWtvXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBleHBvcnQgeyBOZWtvLCBOZWtvQ29uZmlnLCBkZWZhdWx0Q29uZmlnLCBkZWZhdWx0TmVrbyB9IGZyb20gJy4vbmVrbyc7XG5leHBvcnQgKiBmcm9tICcuL25la28nO1xuXG5leHBvcnQgeyBydW4gYXMgcnVuV2ViLCBydW5EZWZhdWx0IGFzIHJ1bldlYkRlZmF1bHQgfSBmcm9tICcuL3dlYic7XG4iLCIvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHtAbGluayBOZWtvfSBjbGFzcyB3aGljaCBlbmNhcHN1bGF0ZXMgbmVrbyBsb2dpY1xuICpcbiAqIE1vc3QgdXNlcnMgd291bGQgd2FudCB0byB1c2Uge0BsaW5rIGRlZmF1bHROZWtvfVxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBpbnRlcmZhY2UgZm9yIGNvbmZpZ3M8YnI+XG4gKiBEZWZpbmVzIHRoZSBiZWhhdmlvdXIgb2YgbmVrb1xuICpcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgTmVrb0NvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE5la29Db25maWcge1xuICAvKiogVXNlZCB0byB1cGRhdGUgbmVrbydzIHBvc2l0aW9uICovXG4gIHNwZWVkOiBudW1iZXI7XG4gIC8qKlxuICAgKiBSYW5nZSB3aGVyZSBuZWtvIHdvdWxkIG5vdCByZWFjdCB0byBjdXJzb3I8YnI+XG4gICAqIGkuZS4gd2hlbiB0aGUgY3Vyc29yIGluIHRoZSBjaXJjbGUgd2l0aCB0aGUgZ2l2ZW4gcmFkaXVzXG4gICAqL1xuICByYWRpdXM6IG51bWJlcjtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aWNrcyBiZWZvcmUgSXRjaGluZzxicj5cbiAgICogVXNlZCBhZnRlciBpdGNoaW5nXG4gICAqL1xuICB0aWNrc0JlZm9yZUl0Y2g6ICgpID0+IG51bWJlcjtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aWNrcyBiZWZvcmUgU2NyYXRjaGluZzxicj5cbiAgICogVXNlZCBhZnRlciBzY3JhdGNoaW5nXG4gICAqL1xuICB0aWNrc0JlZm9yZVNjcmF0Y2g6ICgpID0+IG51bWJlcjtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiB0aWNrcyBiZWZvcmUgWWF3bmluZzxicj5cbiAgICogVXNlZCBhZnRlciB5YXduaW5nXG4gICAqL1xuICB0aWNrc0JlZm9yZVlhd246ICgpID0+IG51bWJlcjtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlyZWN0aW9uIGZvciB0aGUgY3VycmVudCBzY3JhdGNoXG4gICAqL1xuICBzY3JhdGNoRGlyZWN0aW9uOiAoKSA9PiAncycgfCAndycgfCAnZScgfCAnbic7XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IHJhbmRJbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PlxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3Ige0BsaW5rIE5la299XG4gKlxuICogVGlja3MgYW5kIHNjcmF0Y2ggZGlyZWN0aW9uIGFyZSByYW5kb21seSBnZW5lcmF0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb25maWc6IE5la29Db25maWcgPSB7XG4gIC8qKiBUaGUgc3BlZWQgcGFyYW0gKi9cbiAgc3BlZWQ6IDEwLFxuICByYWRpdXM6IDEwLFxuICB0aWNrc0JlZm9yZUl0Y2g6ICgpID0+IHtcbiAgICBsZXQgbWluID0gNztcbiAgICBsZXQgbWF4ID0gMTQ7XG4gICAgcmV0dXJuIHJhbmRJbnQobWluLCBtYXgpO1xuICB9LFxuICB0aWNrc0JlZm9yZVNjcmF0Y2g6ICgpID0+IHtcbiAgICBsZXQgbWluID0gNztcbiAgICBsZXQgbWF4ID0gMTQ7XG4gICAgcmV0dXJuIHJhbmRJbnQobWluLCBtYXgpO1xuICB9LFxuICB0aWNrc0JlZm9yZVlhd246ICgpID0+IHtcbiAgICBsZXQgbWluID0gMjA7XG4gICAgbGV0IG1heCA9IDQwO1xuICAgIHJldHVybiByYW5kSW50KG1pbiwgbWF4KTtcbiAgfSxcbiAgc2NyYXRjaERpcmVjdGlvbjogKCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSB7XG4gICAgICAxOiAncycsXG4gICAgICAyOiAndycsXG4gICAgICAzOiAnZScsXG4gICAgICA0OiAnbicsXG4gICAgfTtcbiAgICBjb25zdCBybmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDEpKSArIDE7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBkaXJlY3Rpb25zW3JuZF07XG4gIH0sXG59O1xuXG4vKipcbiAqIFJlcHJlc2VudHMgd2hhdCBOZWtvIHNob3VsZCBpbXBsZW1lbnQgc28gdGhhdCBpdCBjYW4gYmUgZHJhd24gb24gdGhlIHNjcmVlblxuICpcbiAqIFVzZWQgaW4gaGVscGVyIGZ1bmN0aW9uc1xuICogU2VlIHtAbGluayBcIndlYlwifSBtb2R1bGVcbiAqXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE5la29JbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZWtvSW50ZXJmYWNlIHtcbiAgc3RhdGU6IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICB9O1xuXG4gIC8qKiBVcGRhdGVzIHRoZSBuZWtvJ3Mgc3RhdGUgKi9cbiAgdXBkYXRlOiAoY3Vyc29yWDogbnVtYmVyLCBjdXJzb3JZOiBudW1iZXIpID0+IHZvaWQ7XG4gIGltZzogc3RyaW5nO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgTmVrb30gd2l0aCB7QGxpbmsgZGVmYXVsdENvbmZpZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHROZWtvKCk6IE5la29JbnRlcmZhY2Uge1xuICByZXR1cm4gbmV3IE5la28oZGVmYXVsdENvbmZpZyk7XG59XG5cbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgbmVrb1xuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBOZWtvXG4gKiBAaW1wbGVtZW50cyB7QGxpbmsgTmVrb0ludGVyZmFjZX1cbiAqL1xuZXhwb3J0IGNsYXNzIE5la28gaW1wbGVtZW50cyBOZWtvSW50ZXJmYWNlIHtcbiAgc3RhdGU6IHtcbiAgICBuYW1lOiAnc3RpbGwnIHwgJ2l0Y2gnIHwgJ2FsZXJ0JyB8ICdydW4nIHwgJ3NjcmF0Y2gnIHwgJ3lhd24nIHwgJ3NsZWVwJztcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHRpY2s/OiBudW1iZXI7XG4gICAgZGlyZWN0aW9uPzogc3RyaW5nO1xuICAgIHRpY2tzQmVmb3JlSXRjaDogbnVtYmVyO1xuICAgIGZyYW1lc0l0Y2g/OiBudW1iZXI7XG4gICAgdGlja3NCZWZvcmVTY3JhdGNoOiBudW1iZXI7XG4gICAgZnJhbWVzU2NyYXRjaD86IG51bWJlcjtcbiAgICB0aWNrc0JlZm9yZVlhd246IG51bWJlcjtcbiAgICBmcmFtZXNZYXduPzogbnVtYmVyO1xuICB9ID0ge1xuICAgIG5hbWU6ICdzdGlsbCcsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHRpY2tzQmVmb3JlSXRjaDogNSxcbiAgICB0aWNrc0JlZm9yZVNjcmF0Y2g6IDUsXG4gICAgdGlja3NCZWZvcmVZYXduOiAxMCxcbiAgfTtcblxuICBnZXQgaW1nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuc3RhdGUuZGlyZWN0aW9uID8gdGhpcy5zdGF0ZS5kaXJlY3Rpb24gOiAnJ30ke1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lXG4gICAgfSR7dGhpcy5zdGF0ZS50aWNrID8gdGhpcy5zdGF0ZS50aWNrIDogJyd9YDtcbiAgfVxuXG4gIGNvbmZpZzogTmVrb0NvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb25maWc6IE5la29Db25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4uY29uZmlnIH07XG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZUl0Y2ggPSBjb25maWcudGlja3NCZWZvcmVJdGNoKCk7XG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVNjcmF0Y2ggPSBjb25maWcudGlja3NCZWZvcmVTY3JhdGNoKCk7XG4gICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZVlhd24gPSBjb25maWcudGlja3NCZWZvcmVZYXduKCk7XG4gIH1cblxuICAvLyB1cGRhdGVzIHRoZSBzdGF0ZVxuICB1cGRhdGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5uYW1lID09ICdzdGlsbCcpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RpbGwoeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ2l0Y2gnKSB7XG4gICAgICB0aGlzLnVwZGF0ZUl0Y2goeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ2FsZXJ0Jykge1xuICAgICAgdGhpcy51cGRhdGVBbGVydCh4LCB5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubmFtZSA9PSAncnVuJykge1xuICAgICAgdGhpcy51cGRhdGVSdW4oeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3NjcmF0Y2gnKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcmF0Y2goeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3lhd24nKSB7XG4gICAgICB0aGlzLnVwZGF0ZVlhd24oeCwgeSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm5hbWUgPT0gJ3NsZWVwJykge1xuICAgICAgdGhpcy51cGRhdGVTbGVlcCh4LCB5KTtcbiAgICB9XG4gIH07XG5cbiAgdXBkYXRlU2xlZXAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLmNoZWNrU3RhdGUoJ3NsZWVwJyk7XG4gICAgLy8gcmVzZXQgdGlja3NcbiAgICBpZiAoIXRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdhbGVydCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrc0JlZm9yZUl0Y2ggPSB0aGlzLmNvbmZpZy50aWNrc0JlZm9yZUl0Y2goKTtcbiAgICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVTY3JhdGNoID0gdGhpcy5jb25maWcudGlja3NCZWZvcmVTY3JhdGNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS50aWNrID0gdGhpcy5zdGF0ZS50aWNrID09PSAxID8gMiA6IDE7XG4gIH1cblxuICB1cGRhdGVZYXduKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5jaGVja1N0YXRlKCd5YXduJyk7XG4gICAgLy8gcmVzZXQgdGlja3NcbiAgICBpZiAoIXRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdhbGVydCc7XG4gICAgICB0aGlzLnN0YXRlLmZyYW1lc1lhd24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmZyYW1lc1lhd24gLSAxID09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzbGVlcCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSAxO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNZYXduID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVZYXduID0gdGhpcy5jb25maWcudGlja3NCZWZvcmVZYXduKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5mcmFtZXNZYXduIC09IDE7XG4gIH1cblxuICB1cGRhdGVTY3JhdGNoKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5jaGVja1N0YXRlKCdzY3JhdGNoJyk7XG4gICAgaWYgKCF0aGlzLmN1cnNvckNsb3NlKHgsIHkpKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAnYWxlcnQnO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUuZnJhbWVzU2NyYXRjaCA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlU2NyYXRjaCA9IHRoaXMuY29uZmlnLnRpY2tzQmVmb3JlU2NyYXRjaCgpO1xuICAgICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRvbmUgc2NyYXRjaGluZ1xuICAgIGlmICh0aGlzLnN0YXRlLmZyYW1lc1NjcmF0Y2ggLSAxID09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzdGlsbCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNTY3JhdGNoID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVTY3JhdGNoID0gdGhpcy5jb25maWcudGlja3NCZWZvcmVTY3JhdGNoKCk7XG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5mcmFtZXNTY3JhdGNoIC09IDE7XG4gICAgdGhpcy5zdGF0ZS50aWNrID0gdGhpcy5zdGF0ZS50aWNrID09PSAxID8gMiA6IDE7XG4gIH1cblxuICB1cGRhdGVTdGlsbCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMuY2hlY2tTdGF0ZSgnc3RpbGwnKTtcbiAgICBpZiAoIXRoaXMuY3Vyc29yQ2xvc2UoeCwgeSkpIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdhbGVydCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnRpY2tzQmVmb3JlWWF3biA9PT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3lhd24nO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNZYXduID0gMjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS50aWNrc0JlZm9yZUl0Y2ggPT09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdpdGNoJztcbiAgICAgIHRoaXMuc3RhdGUuZnJhbWVzSXRjaCA9IDQ7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSAxO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnRpY2tzQmVmb3JlU2NyYXRjaCA9PT0gMCkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3NjcmF0Y2gnO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNTY3JhdGNoID0gNDtcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IDE7XG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IHRoaXMuY29uZmlnLnNjcmF0Y2hEaXJlY3Rpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlSXRjaCAtPSAxO1xuICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVTY3JhdGNoIC09IDE7XG4gIH1cblxuICB1cGRhdGVJdGNoKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5jaGVja1N0YXRlKCdpdGNoJyk7XG4gICAgaWYgKCF0aGlzLmN1cnNvckNsb3NlKHgsIHkpKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAnYWxlcnQnO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUuZnJhbWVzSXRjaCA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlSXRjaCA9IHRoaXMuY29uZmlnLnRpY2tzQmVmb3JlSXRjaCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGRvbmUgaXRjaGluZ1xuICAgIGlmICh0aGlzLnN0YXRlLmZyYW1lc0l0Y2ggLSAxID09IDApIHtcbiAgICAgIHRoaXMuc3RhdGUubmFtZSA9ICdzdGlsbCc7XG4gICAgICB0aGlzLnN0YXRlLnRpY2sgPSBudWxsO1xuICAgICAgdGhpcy5zdGF0ZS5mcmFtZXNJdGNoID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUudGlja3NCZWZvcmVJdGNoID0gdGhpcy5jb25maWcudGlja3NCZWZvcmVJdGNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5mcmFtZXNJdGNoIC09IDE7XG4gICAgdGhpcy5zdGF0ZS50aWNrID0gdGhpcy5zdGF0ZS50aWNrID09PSAxID8gMiA6IDE7XG4gIH1cblxuICB1cGRhdGVBbGVydCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMuY2hlY2tTdGF0ZSgnYWxlcnQnKTtcbiAgICBpZiAodGhpcy5jdXJzb3JDbG9zZSh4LCB5KSkge1xuICAgICAgdGhpcy5zdGF0ZS5uYW1lID0gJ3N0aWxsJztcbiAgICAgIHRoaXMuc3RhdGUudGljayA9IG51bGw7XG4gICAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS50aWNrID0gMTtcbiAgICB0aGlzLnN0YXRlLm5hbWUgPSAncnVuJztcbiAgICB0aGlzLnN0YXRlLmRpcmVjdGlvbiA9IHRoaXMuY2hvb3NlUnVuRGlyZWN0aW9uKHgsIHkpO1xuICAgIHRoaXMubWFrZVN0ZXAoeCwgeSk7XG4gIH1cblxuICB1cGRhdGVSdW4oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLmNoZWNrU3RhdGUoJ3J1bicpO1xuICAgIGlmICh0aGlzLmN1cnNvckNsb3NlKHgsIHkpKSB7XG4gICAgICB0aGlzLnN0YXRlLm5hbWUgPSAnc3RpbGwnO1xuICAgICAgdGhpcy5zdGF0ZS50aWNrID0gbnVsbDtcbiAgICAgIHRoaXMuc3RhdGUuZGlyZWN0aW9uID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlLnRpY2tzQmVmb3JlWWF3biA9IE1hdGgubWF4KHRoaXMuc3RhdGUudGlja3NCZWZvcmVZYXduIC0gMSwgMCk7XG4gICAgdGhpcy5zdGF0ZS5kaXJlY3Rpb24gPSB0aGlzLmNob29zZVJ1bkRpcmVjdGlvbih4LCB5KTtcbiAgICB0aGlzLnN0YXRlLnRpY2sgPSB0aGlzLnN0YXRlLnRpY2sgPT09IDEgPyAyIDogMTtcbiAgICB0aGlzLm1ha2VTdGVwKHgsIHkpO1xuICB9XG5cbiAgbWFrZVN0ZXAoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAvLyB4PTAgeT0tMTBcbiAgICBjb25zdCBkeCA9IHggLSB0aGlzLnN0YXRlLng7XG4gICAgY29uc3QgZHkgPSB5IC0gdGhpcy5zdGF0ZS55O1xuICAgIGxldCBwaGkgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG5cbiAgICB0aGlzLnN0YXRlLnggKz0gdGhpcy5jb25maWcuc3BlZWQgKiBNYXRoLmNvcyhwaGkpO1xuICAgIHRoaXMuc3RhdGUueSArPSB0aGlzLmNvbmZpZy5zcGVlZCAqIE1hdGguc2luKHBoaSk7XG4gIH1cblxuICBjdXJzb3JDbG9zZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLmh5cG90KHRoaXMuc3RhdGUueCAtIHgsIHRoaXMuc3RhdGUueSAtIHkpIDwgdGhpcy5jb25maWcucmFkaXVzO1xuICB9XG5cbiAgY2hvb3NlUnVuRGlyZWN0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBkeCA9IHggLSB0aGlzLnN0YXRlLng7XG4gICAgY29uc3QgZHkgPSB5IC0gdGhpcy5zdGF0ZS55O1xuICAgIGNvbnN0IGRpYWcgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gICAgbGV0IHBoaSA9IGNhbGNBbmdsZURlZ3JlZXMoZHgsIGR5KTtcblxuICAgIC8vIHRvZG8gdXNlIG1hdGgucGlcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgLTIyLjUgPCBwaGkgJiYgcGhpIDw9IDIyLjU6XG4gICAgICAgIHJldHVybiAnZSc7XG4gICAgICBjYXNlIC02Ny41IDwgcGhpICYmIHBoaSA8PSAtMjIuNTpcbiAgICAgICAgcmV0dXJuICduZSc7XG4gICAgICBjYXNlIC0xMTIuNSA8IHBoaSAmJiBwaGkgPD0gLTY3LjU6XG4gICAgICAgIHJldHVybiAnbic7XG4gICAgICBjYXNlIC0xNTcuNSA8IHBoaSAmJiBwaGkgPD0gLTExMi41OlxuICAgICAgICByZXR1cm4gJ253JztcbiAgICAgIGNhc2UgKC0xODAgPD0gcGhpICYmIHBoaSA8PSAtMTU3LjUpIHx8ICgxNTcuNSA8IHBoaSAmJiBwaGkgPD0gMTgwKTpcbiAgICAgICAgcmV0dXJuICd3JztcbiAgICAgIGNhc2UgMTEyLjUgPCBwaGkgJiYgcGhpIDw9IDE1Ny41OlxuICAgICAgICByZXR1cm4gJ3N3JztcbiAgICAgIGNhc2UgNjcuNSA8IHBoaSAmJiBwaGkgPD0gMTEyLjU6XG4gICAgICAgIHJldHVybiAncyc7XG4gICAgICBjYXNlIDIyLjUgPCBwaGkgJiYgcGhpIDw9IDY3LjU6XG4gICAgICAgIHJldHVybiAnc2UnO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcihgZXJyb3IgaW4gZmluZGluZyBwYXRoIGRpcmVjdGlvbiAke2RpYWd9ICR7cGhpfWApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tTdGF0ZShuYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAobmFtZSAhPSB0aGlzLnN0YXRlLm5hbWUpIHtcbiAgICAgIHRocm93IEVycm9yKGBleHBlY3RlZCBzdGF0ZTogJHtuYW1lfSwgZ290OiAke3RoaXMuc3RhdGUubmFtZX1gKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gY2FsY0FuZ2xlRGVncmVlcyh4OiBhbnksIHk6IGFueSk6IG51bWJlciB7XG4gIHJldHVybiAoTWF0aC5hdGFuMih5LCB4KSAqIDE4MCkgLyBNYXRoLlBJO1xufVxuIiwiLyoqXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHVzZSBuZWtvIGluIHRoZSB3ZWJcbiAqXG4gKiBNb3N0IHVzZXJzIHdvdWxkIHdhbnQgdG8gdXNlIHtAbGluayBydW5EZWZhdWx0fVxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cblxuaW1wb3J0ICogYXMgTmVrbyBmcm9tICcuL2luZGV4JztcblxuLyoqXG4gKiBSdW5zIG5la28gb24gdGhlIGRvY3VtZW50XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFzc2V0c0RpclxuICogRGlyZWN0b3J5IHdpdGggYXNzZXRzIHVzZWQgZm9yIG5la28gPGJyPlxuICogSW1hZ2VzIHNob3VsZCBiZSBpbiBfYXNzZXRzRGlyL1wiaW1nX25hbWVcIi5naWZfIGZvcm1hdC4gU2VlIGV4YW1wbGUgZGlyZWN0b3J5XG4gKlxuICogQGV4cG9ydFxuICogQHJldHVybnMgdXNlZCB0byByZW1vdmUgbmVrbyBmcm9tIHRoZSBkb2N1bWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuRGVmYXVsdChhc3NldHNEaXIgPSAnL2Fzc2V0cy9zb2NrcycpIHtcbiAgY29uc3QgbiA9IE5la28uZGVmYXVsdE5la28oKTtcbiAgcHJlbG9hZEltYWdlcyguLi5pbWdzLm1hcCgoaSkgPT4gYXNzZXRzRGlyICsgJy8nICsgaSArICcuZ2lmJykpO1xuICByZXR1cm4gcnVuKG4sIGFzc2V0c0Rpcik7XG59XG5cbi8qKlxuICogUnVucyBuZWtvIG9uIHRoZSBkb2N1bWVudFxuICpcbiAqIEBleHBvcnRcbiAqIEBwYXJhbSB7TmVrby5OZWtvSW50ZXJmYWNlfSBuXG4gKiBBIG5la28gdGhhdCBzYXRpc2ZpZXMgdGhlIHtAbGluayBOZWtvSW50ZXJmYWNlfTxicj5cbiAqIE1vc3QgdXNlcnMgd291bGQgd2FudCB0byB1c2UgdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gYnkgc3VwcGx5aW5nIHtAbGluayBkZWZhdWx0TmVrb31cbiAqIEBwYXJhbSB7c3RyaW5nfSBhc3NldHNEaXJcbiAqIERpcmVjdG9yeSB3aXRoIGFzc2V0cyB1c2VkIGZvciBuZWtvIDxicj5cbiAqIEltYWdlcyBzaG91bGQgYmUgaW4gX2Fzc2V0c0Rpci9cImltZ19uYW1lXCIuZ2lmXyBmb3JtYXQuIFNlZSBleGFtcGxlIGRpcmVjdG9yeVxuICogQHJldHVybnMgdXNlZCB0byByZW1vdmUgbmVrbyBmcm9tIHRoZSBkb2N1bWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuKG46IE5la28uTmVrb0ludGVyZmFjZSwgYXNzZXRzRGlyOiBzdHJpbmcpIHtcbiAgbGV0IGN4ID0gMDtcbiAgbGV0IGN5ID0gMDtcbiAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZXYpID0+IHtcbiAgICBjeCA9IGV2Lng7XG4gICAgY3kgPSBldi55O1xuICB9O1xuXG4gIGxldCBlID0gYWRkRWxUb0RvbSgpO1xuXG4gIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgbi51cGRhdGUoY3gsIGN5KTtcbiAgICBkcmF3KGUsIG4sIGFzc2V0c0Rpcik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlID0gc2V0SW50ZXJ2YWwodGljaywgMzAwKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGhhbmRsZSk7XG4gICAgZS5yZW1vdmUoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZHJhdyhlOiBIVE1MSW1hZ2VFbGVtZW50LCBuOiBOZWtvLk5la29JbnRlcmZhY2UsIGFzc2V0c0Rpcjogc3RyaW5nKSB7XG4gIGUuc3R5bGUudG9wID0gbi5zdGF0ZS55ICsgJ3B4JztcbiAgZS5zdHlsZS5sZWZ0ID0gbi5zdGF0ZS54ICsgJ3B4JztcbiAgZS5zcmMgPSBhc3NldHNEaXIgKyAnLycgKyBuLmltZyArICcuZ2lmJztcbn1cblxuLy8gcmV0dXJucyBpZFxuZnVuY3Rpb24gYWRkRWxUb0RvbSgpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBlLnNyYyA9XG4gICAgJ2h0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRnBicy50d2ltZy5jb20lMkZtZWRpYSUyRkI4VzZ3VVBDWUFFbVdqeS5wbmclM0FsYXJnZSZmPTEmbm9mYj0xJztcbiAgY29uc3QgcyA9IGUuc3R5bGU7XG4gIHMucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBzLnRvcCA9ICcwcHgnO1xuICBzLmxlZnQgPSAnMHB4JztcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBib2R5LmFwcGVuZENoaWxkKGUpO1xuICByZXR1cm4gZTtcbn1cblxuZnVuY3Rpb24gcHJlbG9hZEltYWdlcyguLi5pbWdzOiBzdHJpbmdbXSkge1xuICB2YXIgaW1hZ2VzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xuICAgIGltYWdlc1tpXSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlc1tpXS5zcmMgPSBpbWdzW2ldO1xuICB9XG59XG5cbnZhciBpbWdzID0gW1xuICAnYWxlcnQnLFxuICAnc3RpbGwnLFxuICAnbnJ1bjEnLFxuICAnbnJ1bjInLFxuICAnbmVydW4xJyxcbiAgJ25lcnVuMicsXG4gICdlcnVuMScsXG4gICdlcnVuMicsXG4gICdzZXJ1bjEnLFxuICAnc2VydW4yJyxcbiAgJ3NydW4xJyxcbiAgJ3NydW4yJyxcbiAgJ3N3cnVuMScsXG4gICdzd3J1bjInLFxuICAnd3J1bjEnLFxuICAnd3J1bjInLFxuICAnbndydW4xJyxcbiAgJ253cnVuMicsXG4gICd5YXduJyxcbiAgJ3NsZWVwMScsXG4gICdzbGVlcDInLFxuICAnaXRjaDEnLFxuICAnaXRjaDInLFxuICAnbnNjcmF0Y2gxJyxcbiAgJ25zY3JhdGNoMicsXG4gICdlc2NyYXRjaDEnLFxuICAnZXNjcmF0Y2gyJyxcbiAgJ3NzY3JhdGNoMScsXG4gICdzc2NyYXRjaDInLFxuICAnd3NjcmF0Y2gxJyxcbiAgJ3dzY3JhdGNoMicsXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
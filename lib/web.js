"use strict";
/**
 * This module provides helper functions to use neko in the web
 *
 * Most users would want to use {@link runDefault}
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDefault = runDefault;
exports.run = run;
var Neko = __importStar(require("./index"));
/**
 * Runs neko on the document
 *
 * @param {string} imagesDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 *
 * @export
 * @returns function used to remove neko from the document
 */
function runDefault(imagesDir) {
    if (imagesDir === void 0) { imagesDir = '/assets/socks'; }
    var n = Neko.defaultNeko();
    preloadImages.apply(void 0, imgs.map(function (i) { return "".concat(imagesDir, "/").concat(i, ".gif"); }));
    return run(n, imagesDir);
}
/**
 * Runs neko on the document
 *
 * @export
 * @param {Neko.NekoInterface} n
 * A neko that satisfies the {@link NekoInterface}<br>
 * Most users would want to use the default implementation by supplying {@link defaultNeko}
 * @param {string} imagesDir
 * Directory with assets used for neko <br>
 * Images should be in _assetsDir/"img_name".gif_ format. See example directory
 * @returns function used to remove neko from the document
 */
function run(n, imagesDir) {
    var cx = 0;
    var cy = 0;
    var csx = 0;
    var csy = 0;
    var stay = false;
    var handleMouseMove = function (ev) {
        if (!stay) {
            cx = ev.pageX;
            cy = ev.pageY;
        }
    };
    document.addEventListener('mousemove', handleMouseMove);
    var handleScroll = function () {
        if (!stay) {
            var sx = window.scrollX;
            var sy = window.scrollY;
            cx += sx - csx;
            csx = sx;
            cy += sy - csy;
            csy = sy;
        }
    };
    window.addEventListener('scroll', handleScroll);
    var e = addElToDom();
    var handleClick = function () {
        stay = !stay;
    };
    e.addEventListener('click', handleClick);
    // --- Add drag feature ---
    var dragging = false;
    var dragOffsetX = 0;
    var dragOffsetY = 0;
    var handleMouseDown = function (ev) {
        // Start dragging when mousedown on cat image
        dragging = true;
        // Save the offset between image top-left and mouse position
        dragOffsetX = ev.pageX - n.state.x;
        dragOffsetY = ev.pageY - n.state.y;
        ev.preventDefault();
    };
    var handleMouseUp = function () {
        dragging = false;
    };
    var handleDragMove = function (ev) {
        if (dragging) {
            // Update cat position while dragging
            n.state.x = ev.pageX - dragOffsetX;
            n.state.y = ev.pageY - dragOffsetY;
            // Update drawing
            draw(e, n, imagesDir);
            // Stop following cursor after drag
            stay = true;
        }
    };
    e.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleMouseUp);
    var tick = function () {
        n.update(cx, cy);
        draw(e, n, imagesDir);
    };
    var handle = setInterval(tick, 300);
    return function () {
        clearInterval(handle);
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        e.removeEventListener('click', handleClick);
        e.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleMouseUp);
        e.remove();
    };
}
function draw(e, n, imagesDir) {
    e.style.top = "".concat(n.state.y, "px");
    e.style.left = "".concat(n.state.x, "px");
    e.src = "".concat(imagesDir, "/").concat(n.img, ".gif");
}
// returns id
function addElToDom() {
    var e = document.createElement('img');
    e.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
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
//# sourceMappingURL=web.js.map